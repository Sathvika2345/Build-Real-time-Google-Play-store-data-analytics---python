# Build-Real-time-Google-Play-store-data-analytics---python
# 📊 Google Play Store Data Analytics Dashboard (Real-Time & Conditional)

This project is a real-time analytics dashboard built with Python to visualize Google Play Store data. It includes dynamic, filtered charts based on app attributes and restricts visibility of certain graphs based on **Indian Standard Time (IST)**.

---

## 📁 Project Structure


---

## 📌 Features

### 1. **Scatter Plot for Paid Apps**
- Visualizes the relationship between **Revenue** and **Installs**.
- Applies only to **Paid Apps**.
- Revenue calculated as `Price × Installs`.
- Colored by app category.
- Includes a **trendline** to show correlation.

### 2. **Grouped Bar Chart for Top Categories**
- Compares **Average Rating** and **Total Review Count**.
- Filters:
  - Rating ≥ 4.0
  - Size ≥ 10 MB
  - Last update in **January**
- Shows data only between **3 PM – 5 PM IST**.

### 3. **Time Series Line Chart by Category**
- Shows install trends over time.
- Filters:
  - App **name must not** start with **X, Y, Z**.
  - App **category must start** with **E, C, or B**.
  - **Reviews > 500**
  - App **name must not** contain the letter **S**
- Highlights months with **>20% month-over-month growth**.
- Category Translations:
  - "Beauty" → **Hindi**
  - "Business" → **Tamil**
  - "Dating" → **German**
- Visible only from **6 PM – 9 PM IST**.

---

## 🛠 Tech Stack

- `Python 3.8+`
- `Pandas`
- `Matplotlib`
- `Seaborn`
- `Plotly`
- `datetime`, `pytz`
- `scikit-learn` (for trendline regression)

---

## 🚀 How to Run

### 1. Clone this repository

```bash
git clone https://github.com/yourusername/google-play-dashboard.git
cd google-play-dashboard
