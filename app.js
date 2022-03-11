<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2113.2">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px '.AppleSystemUIFontMonospaced'; color: #8c9cad; -webkit-text-stroke: #8c9cad}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; text-align: right; font: 12.0px '.AppleSystemUIFontMonospaced'; color: #8c9cad; -webkit-text-stroke: #8c9cad}
    span.s1 {font-kerning: none}
    table.t1 {background-color: #14161a; border-collapse: collapse}
    td.td1 {width: 111.3px; padding: 0.0px 10.0px 0.0px 10.0px}
    td.td2 {width: 111.3px; min-width: 50.0px; padding: 0.0px 10.0px 0.0px 10.0px}
    td.td3 {width: 823.4px; padding: 0.0px 10.0px 0.0px 10.0px}
  </style>
</head>
<body>
<table cellspacing="0" cellpadding="0" class="t1">
  <tbody>
    <tr>
      <td valign="top" class="td1">
        <p class="p1"><span class="s1">console.log('Is this working?');</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td1">
        <p class="p1"><span class="s1"><br>
</span></p>
        <p class="p1"><span class="s1"><br>
</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p2"><span class="s1"><br>
</span></p>
      </td>
      <td valign="top" class="td3">
        <p class="p1"><span class="s1">let viz;</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td1">
        <p class="p1"><span class="s1"><br>
</span></p>
        <p class="p1"><span class="s1"><br>
</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p2"><span class="s1"><br>
</span></p>
      </td>
      <td valign="top" class="td3">
        <p class="p1"><span class="s1">//Add Share Link to Tableau Public in here</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p2"><span class="s1"><br>
</span></p>
      </td>
      <td valign="top" class="td3">
        <p class="p1"><span class="s1">const url = "https://public.tableau.com/views/nfts_market/marketplaces?:language=en-GB&amp;publish=yes&amp;:display_count=n&amp;:origin=viz_share_link";</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td1">
        <p class="p1"><span class="s1"><br>
</span></p>
        <p class="p1"><span class="s1"><br>
</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p2"><span class="s1"><br>
</span></p>
      </td>
      <td valign="top" class="td3">
        <p class="p1"><span class="s1">const vizContainer = document.getElementById('vizContainer');</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p2"><span class="s1"><br>
</span></p>
      </td>
      <td valign="top" class="td3">
        <p class="p1"><span class="s1">const options = {</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p2"><span class="s1"><br>
</span></p>
      </td>
      <td valign="top" class="td3">
        <p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>hideTabs: true,</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p2"><span class="s1"><br>
</span></p>
      </td>
      <td valign="top" class="td3">
        <p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>height: 1000,</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p2"><span class="s1"><br>
</span></p>
      </td>
      <td valign="top" class="td3">
        <p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>width: 1200,</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p2"><span class="s1"><br>
</span></p>
      </td>
      <td valign="top" class="td3">
        <p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>onFirstInteraction: function() {</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p2"><span class="s1"><br>
</span></p>
      </td>
      <td valign="top" class="td3">
        <p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>workbook = viz.getWorkbook();</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p2"><span class="s1"><br>
</span></p>
      </td>
      <td valign="top" class="td3">
        <p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>activeSheet = workbook.getActiveSheet();</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p2"><span class="s1"><br>
</span></p>
      </td>
      <td valign="top" class="td3">
        <p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>console.log("My dashboard is interactive");</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p2"><span class="s1"><br>
</span></p>
      </td>
      <td valign="top" class="td3">
        <p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p2"><span class="s1"><br>
</span></p>
      </td>
      <td valign="top" class="td3">
        <p class="p1"><span class="s1">};</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td1">
        <p class="p1"><span class="s1"><br>
</span></p>
        <p class="p1"><span class="s1"><br>
</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p2"><span class="s1"><br>
</span></p>
      </td>
      <td valign="top" class="td3">
        <p class="p1"><span class="s1">//create a function to generate the viz element</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p2"><span class="s1"><br>
</span></p>
      </td>
      <td valign="top" class="td3">
        <p class="p1"><span class="s1">function initViz() {</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p2"><span class="s1"><br>
</span></p>
      </td>
      <td valign="top" class="td3">
        <p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>console.log('Executing the initViz function!');</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p2"><span class="s1"><br>
</span></p>
      </td>
      <td valign="top" class="td3">
        <p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>viz = new tableau.Viz(vizContainer, url, options);</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p2"><span class="s1"><br>
</span></p>
      </td>
      <td valign="top" class="td3">
        <p class="p1"><span class="s1">}</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td1">
        <p class="p1"><span class="s1"><br>
</span></p>
        <p class="p1"><span class="s1"><br>
</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p2"><span class="s1"><br>
</span></p>
      </td>
      <td valign="top" class="td3">
        <p class="p1"><span class="s1">// run the initViz function when the page loads</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p2"><span class="s1"><br>
</span></p>
      </td>
      <td valign="top" class="td3">
        <p class="p1"><span class="s1">document.addEventListener("DOMContentLoaded", initViz);</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td1">
        <p class="p1"><span class="s1"><br>
</span></p>
        <p class="p1"><span class="s1"><br>
</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p2"><span class="s1"><br>
</span></p>
      </td>
      <td valign="top" class="td3">
        <p class="p1"><span class="s1">const exportPDF = document.getElementById('exportPDF');</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p2"><span class="s1"><br>
</span></p>
      </td>
      <td valign="top" class="td3">
        <p class="p1"><span class="s1">const exportImage = document.getElementById('exportImage');</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td1">
        <p class="p1"><span class="s1"><br>
</span></p>
        <p class="p1"><span class="s1"><br>
</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td1">
        <p class="p1"><span class="s1"><br>
</span></p>
        <p class="p1"><span class="s1"><br>
</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p2"><span class="s1"><br>
</span></p>
      </td>
      <td valign="top" class="td3">
        <p class="p1"><span class="s1">//click on the pdf button to generate pdf of dashboard</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p2"><span class="s1"><br>
</span></p>
      </td>
      <td valign="top" class="td3">
        <p class="p1"><span class="s1">function generatePDF() {</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p2"><span class="s1"><br>
</span></p>
      </td>
      <td valign="top" class="td3">
        <p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>viz.showExportPDFDialog()</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p2"><span class="s1"><br>
</span></p>
      </td>
      <td valign="top" class="td3">
        <p class="p1"><span class="s1">}</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td1">
        <p class="p1"><span class="s1"><br>
</span></p>
        <p class="p1"><span class="s1"><br>
</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p2"><span class="s1"><br>
</span></p>
      </td>
      <td valign="top" class="td3">
        <p class="p1"><span class="s1">exportPDF.addEventListener("click", function () {</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p2"><span class="s1"><br>
</span></p>
      </td>
      <td valign="top" class="td3">
        <p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>generatePDF();</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p2"><span class="s1"><br>
</span></p>
      </td>
      <td valign="top" class="td3">
        <p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>});</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td1">
        <p class="p1"><span class="s1"><br>
</span></p>
        <p class="p1"><span class="s1"><br>
</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p2"><span class="s1"><br>
</span></p>
      </td>
      <td valign="top" class="td3">
        <p class="p1"><span class="s1">//click on image to generate image of dashboard</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p2"><span class="s1"><br>
</span></p>
      </td>
      <td valign="top" class="td3">
        <p class="p1"><span class="s1">function generateImage() {</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p2"><span class="s1"><br>
</span></p>
      </td>
      <td valign="top" class="td3">
        <p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>viz.showExportImageDialog()</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p2"><span class="s1"><br>
</span></p>
      </td>
      <td valign="top" class="td3">
        <p class="p1"><span class="s1">}</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td1">
        <p class="p1"><span class="s1"><br>
</span></p>
        <p class="p1"><span class="s1"><br>
</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p2"><span class="s1"><br>
</span></p>
      </td>
      <td valign="top" class="td3">
        <p class="p1"><span class="s1">exportImage.addEventListener("click", function () {</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p2"><span class="s1"><br>
</span></p>
      </td>
      <td valign="top" class="td3">
        <p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>generateImage();</span></p>
      </td>
    </tr>
    <tr>
      <td valign="top" class="td2">
        <p class="p2"><span class="s1"><br>
</span></p>
      </td>
      <td valign="top" class="td3">
        <p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>});</span></p>
      </td>
    </tr>
  </tbody>
</table>
</body>
</html>
