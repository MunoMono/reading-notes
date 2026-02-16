import React, { useEffect, useState, useRef } from "react";
import { Grid, Column, Breadcrumb, BreadcrumbItem, Button } from "@carbon/react";
import { Download } from "@carbon/icons-react";
import { Link } from "react-router-dom";
import * as d3 from "d3";
import "../styles/pages/_visualizations.scss";

export default function Visualizations() {
  const [data, setData] = useState({ entries: [] });
  const barChartRef = useRef(null);
  const donutChartRef = useRef(null);

  useEffect(() => {
    const base = import.meta.env.BASE_URL || "/";
    const ver = import.meta.env?.VITE_BUILD_ID || "";
    const url = `${base}docs/index.json${ver ? `?v=${ver}` : ""}`;

    fetch(url, { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((json) => setData(json))
      .catch((e) => {
        console.error("Failed to load docs index", { url, error: e });
      });
  }, []);

  useEffect(() => {
    if (!data.entries || data.entries.length === 0) return;

    // Aggregate category counts
    const categoryCounts = {};
    data.entries.forEach((entry) => {
      const cat = entry.category || "(uncategorized)";
      categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
    });

    const chartData = Object.entries(categoryCounts)
      .map(([category, count]) => ({ category, count }))
      .sort((a, b) => b.count - a.count);

    // Draw charts
    const renderCharts = () => {
      drawBarChart(chartData);
      drawDonutChart(chartData);
    };
    
    renderCharts();

    // Redraw on window resize for responsiveness
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(renderCharts, 250);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [data]);

  const drawBarChart = (chartData) => {
    const container = barChartRef.current;
    if (!container) return;

    // Clear previous chart and tooltips
    d3.select(container).selectAll("*").remove();
    d3.selectAll(".d3-tooltip").remove();

    // Responsive sizing based on viewport
    const isMobile = window.innerWidth < 768;
    const margin = isMobile 
      ? { top: 20, right: 20, bottom: 120, left: 50 }
      : { top: 30, right: 40, bottom: 140, left: 80 };
    const containerWidth = container.offsetWidth || 800;
    const width = Math.max(isMobile ? 300 : 600, containerWidth - margin.left - margin.right);
    const height = (isMobile ? 400 : 450) - margin.top - margin.bottom;

    const svg = d3
      .select(container)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Scales
    const x = d3
      .scaleBand()
      .domain(chartData.map((d) => d.category))
      .range([0, width])
      .padding(0.2);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(chartData, (d) => d.count)])
      .nice()
      .range([height, 0]);

    // Economist-style color palette
    const colorPalette = [
      "#0d4f8b", // deep blue
      "#dc362e", // red
      "#f4c145", // gold
      "#009b9e", // teal
      "#5f7a76", // sage
      "#7a6a62", // brown
      "#91adb8", // light blue
      "#e3655b", // coral
      "#7c99ac", // steel blue
      "#8b8b8b", // gray
    ];
    const color = d3.scaleOrdinal(colorPalette);

    // Create tooltip element
    let tooltip = d3.select("body").select(".bar-tooltip");
    if (tooltip.empty()) {
      tooltip = d3
        .select("body")
        .append("div")
        .attr("class", "d3-tooltip bar-tooltip");
    }
    tooltip
      .style("position", "absolute")
      .style("opacity", "0")
      .style("pointer-events", "none")
      .style("z-index", "10000");

    // Bars with rounded tops - create them first without transition
    const bars = svg
      .selectAll(".bar")
      .data(chartData)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => x(d.category))
      .attr("width", x.bandwidth())
      .attr("rx", 2)
      .attr("fill", (d) => color(d.category))
      .style("cursor", "pointer")
      .attr("y", height)
      .attr("height", 0);

    // Add interactivity to bars
    bars
      .on("mouseover", function (event, d) {
        d3.select(this).style("opacity", "0.8");
        tooltip
          .html(`<strong>${d.category}</strong><br/>${d.count} ${d.count === 1 ? 'entry' : 'entries'}`)
          .style("left", (event.pageX + 15) + "px")
          .style("top", (event.pageY - 35) + "px")
          .style("opacity", "1");
      })
      .on("mousemove", function (event) {
        tooltip
          .style("left", (event.pageX + 15) + "px")
          .style("top", (event.pageY - 35) + "px");
      })
      .on("mouseout", function () {
        d3.select(this).style("opacity", "1");
        tooltip.style("opacity", "0");
      });

    // Animate bars after setting up event handlers
    bars
      .transition()
      .duration(1000)
      .ease(d3.easeCubicOut)
      .attr("y", (d) => y(d.count))
      .attr("height", (d) => height - y(d.count));

    // Grid lines
    svg
      .append("g")
      .attr("class", "grid")
      .attr("opacity", 0.1)
      .call(d3.axisLeft(y).tickSize(-width).tickFormat(""));

    // X axis
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x).tickSize(0))
      .select(".domain")
      .attr("stroke-width", 1.5);

    svg
      .selectAll(".tick text")
      .attr("transform", "rotate(-45)")
      .style("text-anchor", "end")
      .style("font-size", isMobile ? "9px" : "11px")
      .attr("dx", "-0.5em")
      .attr("dy", "0.15em")
      .style("cursor", "pointer")
      .on("mouseover", function (event, d) {
        const categoryData = chartData.find(item => item.category === d);
        if (categoryData) {
          tooltip
            .style("opacity", 1)
            .html(`<strong>${categoryData.category}</strong><br/>${categoryData.count} ${categoryData.count === 1 ? 'entry' : 'entries'}`)
            .style("left", event.pageX + 15 + "px")
            .style("top", event.pageY - 35 + "px");
        }
      })
      .on("mouseout", function () {
        tooltip.style("opacity", 0);
      });

    // Y axis
    svg
      .append("g")
      .call(d3.axisLeft(y).ticks(6).tickSize(0).tickPadding(10))
      .select(".domain")
      .attr("stroke-width", 1.5);

    // Y axis label
    svg
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -margin.left + 20)
      .attr("x", -height / 2)
      .style("text-anchor", "middle")
      .style("font-size", "13px")
      .style("font-weight", "500")
      .text("Number of entries");
  };

  const drawDonutChart = (chartData) => {
    const container = donutChartRef.current;
    if (!container) return;

    // Clear previous chart and tooltips
    d3.select(container).selectAll("*").remove();
    d3.selectAll(".d3-tooltip").remove();

    // Responsive sizing
    const isMobile = window.innerWidth < 768;
    const containerWidth = container.offsetWidth || 600;
    const chartWidth = isMobile ? Math.min(containerWidth, 400) : 600;
    const chartHeight = isMobile ? Math.min(containerWidth, 400) : 550;
    const radius = Math.min(chartWidth, chartHeight) / 2 - (isMobile ? 60 : 40);

    const svg = d3
      .select(container)
      .append("svg")
      .attr("width", chartWidth)
      .attr("height", chartHeight)
      .append("g")
      .attr("transform", `translate(${chartWidth / 2},${chartHeight / 2})`);

    // Economist-style color palette
    const colorPalette = [
      "#0d4f8b", "#dc362e", "#f4c145", "#009b9e", "#5f7a76",
      "#7a6a62", "#91adb8", "#e3655b", "#7c99ac", "#8b8b8b",
    ];
    const color = d3.scaleOrdinal(colorPalette);

    const pie = d3
      .pie()
      .value((d) => d.count)
      .sort(null);

    const arc = d3
      .arc()
      .innerRadius(radius * 0.5)
      .outerRadius(radius * 0.8);

    const outerArc = d3
      .arc()
      .innerRadius(radius * 0.9)
      .outerRadius(radius * 0.9);

    // Tooltip
    const tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "d3-tooltip")
      .style("opacity", 0);

    const arcs = svg
      .selectAll(".arc")
      .data(pie(chartData))
      .enter()
      .append("g")
      .attr("class", "arc");

    arcs
      .append("path")
      .attr("d", arc)
      .attr("fill", (d) => color(d.data.category))
      .attr("stroke", "#ffffff")
      .style("stroke-width", "3px")
      .attr("opacity", 0.9)
      .on("mouseover", function (event, d) {
        d3.select(this)
          .attr("opacity", 1)
          .transition()
          .duration(200)
          .attr(
            "d",
            d3
              .arc()
              .innerRadius(radius * 0.5)
              .outerRadius(radius * 0.88)
          );
        tooltip
          .style("opacity", 1)
          .html(
            `<strong>${d.data.category}</strong><br/>${d.data.count} ${d.data.count === 1 ? 'entry' : 'entries'} (${(
              (d.data.count / data.entries.length) *
              100
            ).toFixed(1)}%)`
          )
          .style("left", event.pageX + 15 + "px")
          .style("top", event.pageY - 35 + "px");
      })
      .on("mouseout", function () {
        d3.select(this)
          .attr("opacity", 0.9)
          .transition()
          .duration(200)
          .attr("d", arc);
        tooltip.style("opacity", 0);
      })
      .transition()
      .duration(1200)
      .ease(d3.easeCubicOut)
      .attrTween("d", function (d) {
        const interpolate = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
        return function (t) {
          return arc(interpolate(t));
        };
      });

    // Add labels with category names (only for larger segments)
    arcs
      .filter((d) => d.endAngle - d.startAngle > 0.15) // Only show labels for segments > ~8.5%
      .append("text")
      .attr("transform", function (d) {
        const pos = outerArc.centroid(d);
        const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        pos[0] = radius * (isMobile ? 1.05 : 1.15) * (midangle < Math.PI ? 1 : -1);
        return `translate(${pos})`;
      })
      .style("text-anchor", function (d) {
        const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        return midangle < Math.PI ? "start" : "end";
      })
      .style("font-size", isMobile ? "10px" : "12px")
      .style("font-weight", "500")
      .text((d) => {
        const percentage = ((d.data.count / data.entries.length) * 100).toFixed(0);
        return `${percentage}%`;
      });

    // Add polylines for larger segments
    arcs
      .filter((d) => d.endAngle - d.startAngle > 0.15)
      .append("polyline")
      .attr("stroke", "#525252")
      .style("fill", "none")
      .attr("stroke-width", 1.5)
      .attr("opacity", 0.5)
      .attr("points", function (d) {
        const pos = outerArc.centroid(d);
        const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        pos[0] = radius * 1.15 * (midangle < Math.PI ? 1 : -1);
        return [arc.centroid(d), outerArc.centroid(d), pos];
      });
  };

  const totalEntries = data.entries?.length || 0;

  const downloadCSV = () => {
    // Aggregate category counts
    const categoryCounts = {};
    data.entries.forEach((entry) => {
      const cat = entry.category || "(uncategorized)";
      categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
    });

    // Create CSV content
    let csvContent = "Category,Count,Percentage\n";
    Object.entries(categoryCounts)
      .sort((a, b) => b[1] - a[1])
      .forEach(([category, count]) => {
        const percentage = ((count / totalEntries) * 100).toFixed(2);
        csvContent += `"${category}",${count},${percentage}%\n`;
      });

    // Create download
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `collection-category-analysis-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Grid className="cds--grid cds--grid--narrow visualizations-page">
      <Column lg={16} md={8} sm={4}>
        <Breadcrumb noTrailingSlash>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>Data Visualizations</BreadcrumbItem>
        </Breadcrumb>

        <h2 className="page-heading">Collection Category Analysis</h2>
        <p className="cds--type-body-long">
          Visual analysis of {totalEntries} entries across collection categories. Use these
          charts to identify gaps and balance in your research collection.
        </p>

        <div className="chart-section">
          <h3>Category Distribution - Bar Chart</h3>
          <p className="cds--type-helper-text">
            Shows the number of entries in each collection category. Hover over bars for details.
          </p>
          <div ref={barChartRef} className="chart-container bar-chart"></div>
          <Button
            kind="tertiary"
            renderIcon={Download}
            onClick={downloadCSV}
            className="download-csv-btn"
          >
            Download CSV
          </Button>
        </div>

        <div className="chart-section">
          <h3>Category Proportions - Donut Chart</h3>
          <p className="cds--type-helper-text">
            Shows the relative proportion of entries across categories. Hover over segments for
            percentages.
          </p>
          <div ref={donutChartRef} className="chart-container donut-chart"></div>
          <Button
            kind="tertiary"
            renderIcon={Download}
            onClick={downloadCSV}
            className="download-csv-btn"
          >
            Download CSV
          </Button>
        </div>
      </Column>
    </Grid>
  );
}
