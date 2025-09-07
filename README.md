# Energy Consumption Chart

A simple React project to display energy consumption data (kWh used) alongside average daily temperature using a responsive chart. The project uses **Recharts** for rendering charts and **Tailwind CSS** for styling.

---

## Project Structure

```bash
    my-app/
    ├─ components/
    │ └─ ChartComponent.jsx # Chart component displaying the bar and line chart
    ├─ data/
    │ └─ data.json # Sample data for the chart
    ├─ styles/
    │ └─ colors.js # Centralized color definitions
    ├─ app/
    │ └─ page.jsx # Main page rendering the chart
    └─ README.md
```

---

## Features

- Responsive **ComposedChart** with bars for kWh used and line for temperature.
- Centralized color palette in `styles/colors.js`.
- Dynamic chart data imported from `data/data.js`.
- Legend displayed at the top of the chart.

---

## Installation

1. Clone the repository:

```bash
    git clone https://github.com/AashishKatila/graph
    cd graph
```

2. Install dependencies:

```bash
    npm install
```

3. Start the development server:

```bash
    npm run dev
```

4. Open http://localhost:3000 in your browser.
