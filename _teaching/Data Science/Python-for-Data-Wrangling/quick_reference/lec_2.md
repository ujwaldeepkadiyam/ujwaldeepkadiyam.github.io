---
title: Data Querying and Manipulation
layout: page
permalink: /teaching/Data Science/Python-for-Data-Wrangling/quick_reference/lec_2/
hide_title: true
parent: Python-for-Data-Wrangling
# grand_parent: "Python-for-Data-Wrangling"
---

<h1 align="center"> 2. Data Querying and Manipulation</h1>

<!-- # 📘 Python Session-2 Data Querying and Manipulation -->

## 📂 File Handling with Pandas

* `import pandas as pd`
* `pd.read_excel(path, sheet_name='Sheet')` – Read Excel file
* `pd.set_option('display.max_rows', None)` – Show all rows
* `pd.set_option('display.max_columns', None)` – Show all columns

---

## 🔎 Data Exploration

* `df.head(100)` – First 100 rows
* `df.tail(10)` – Last 10 rows
* `df[10:20]` – Slice specific rows
* `df.shape` – Rows and columns
* `df.info()` – Structure and data types
* `df.columns.values` – List of column names
* `df.dtypes` – Data types of all columns
* `df.describe()` – Summary stats

---

## 🧹 Missing Values Handling

* `df.isnull().sum()` – Missing count per column
* `df.isnull().count()` – Total count per column
* `df.isnull().sum().sum()` – Total missing values

---

## 🎯 Random Sampling

* `df.sample(n=10, random_state=42)` – Random 10 rows

---

## 📊 Column-wise Exploration

* `df['column'].value_counts()` – Count unique values
* `df['column'].nunique()` – Number of unique values

---

## 🗑️ Handling Duplicates

* `df.duplicated()` – Boolean Series marking duplicate rows  
* `df.duplicated(subset=['col1','col2'])` – Check duplicates based on specific columns  
* `df.drop_duplicates()` – Remove duplicate rows (keeps first by default)  
* `df.drop_duplicates(keep='last')` – Remove duplicates, keep last occurrence  
* `df.drop_duplicates(subset=['col1'], keep=False)` – Remove all duplicates from a column  
* `df.drop_duplicates(inplace=True)` – Remove duplicates directly in the same DataFrame. 

---

## 🔎 Filtering with Logical Operators

* `df[df['col'] > 10]` – Filter rows where column values are greater than 10  
* `df[df['col'] == 'A']` – Filter rows where column equals 'A'  
* `df[(df['col1'] > 5) & (df['col2'] < 20)]` – Filter with AND condition  
* `df[(df['col1'] > 5) | (df['col2'] < 20)]` – Filter with OR condition  
* `df[~(df['col'] == 'A')]` – Filter with NOT condition (exclude 'A')  
* `df[df['col'].isin(['A','B'])]` – Filter rows matching multiple values  
* `df[df['col'].between(10,20)]` – Filter rows where values lie between two numbers  

---
## ⚖️ Filtering with Comparison Operators

* `df[df['col'] == 10]` – Equal to  
* `df[df['col'] != 10]` – Not equal to  
* `df[df['col'] > 10]` – Greater than  
* `df[df['col'] < 10]` – Less than  
* `df[df['col'] >= 10]` – Greater than or equal to  
* `df[df['col'] <= 10]` – Less than or equal to  

---
## 🧩 Advanced Filtering (Comparison + Logical Operators)

* `df[(df['A'] > 5) & (df['B'] < 20)]` – Rows where A > 5 AND B < 20  
* `df[(df['A'] == 10) | (df['B'] == 50)]` – Rows where A = 10 OR B = 50  
* `df[(df['A'] != 0) & (df['B'] >= 100)]` – Rows where A is not 0 AND B ≥ 100  
* `df[(df['A'] < 50) | (df['B'].isin([10,20,30]))]` – Rows where A < 50 OR B is in a list  
* `df[~((df['A'] > 100) | (df['B'] < 5))]` – Rows NOT meeting condition (exclude matches)  
* `df[(df['A'].between(10,30)) & (df['B'] != 15)]` – Rows where A is between 10–30 AND B not equal to 15  

---
## 🎯 Filtering with Special Operators

* `df[df['col'].isin([10,20,30])]` – Filter rows where column value is in a list  
* `df[~df['col'].isin([10,20,30])]` – Filter rows where column value is NOT in a list  
* `df[df['col'].between(10,20)]` – Filter rows where column value is between 10 and 20 (inclusive)  
* `df[df['col'].between(10,20, inclusive='neither')]` – Filter rows between 10 and 20 (exclusive)  
* `df[df['col'].isnull()]` – Filter rows where column has NULL/NaN values  
* `df[df['col'].notnull()]` – Filter rows where column is NOT NULL  
* `df[df['col'].str.contains('abc', case=False, na=False)]` – Filter rows where column contains substring 'abc' (case-insensitive)  
* `df[df['col'].str.startswith('abc')]` – Filter rows where column begins with 'abc'  
* `df[df['col'].str.endswith('xyz')]` – Filter rows where column ends with 'xyz'  
* `df[df['col'].str.match('^A.*Z$')]` – Filter rows matching regex (starts with A, ends with Z)  
* `df.query("A > 10 and B < 50")` – Filter using query string with logical expressions  
* `df.loc[df['col'].apply(lambda x: x.isnumeric())]` – Filter rows where values are numeric (custom condition with apply)  

---
## ➗ Filtering with Arithmetic Operators

* `df[df['A'] + df['B'] > 100]` – Filter rows where sum of A and B is greater than 100  
* `df[(df['A'] - df['B']) < 0]` – Filter rows where A is less than B  
* `df[(df['A'] * df['B']) > 500]` – Filter rows where product of A and B is greater than 500  
* `df[(df['A'] / df['B']) > 2]` – Filter rows where ratio A/B is greater than 2  
* `df[(df['A'] % 2) == 0]` – Filter rows where A is even (modulus operator)  
* `df[(df['A'] ** 2) > 100]` – Filter rows where square of A is greater than 100  

---
## 🗃️  Sorting in Pandas

* `df.sort_values('col')` – Sort rows by column (ascending by default)  
* `df.sort_values('col', ascending=False)` – Sort rows in descending order  
* `df.sort_values(['col1','col2'])` – Sort by multiple columns (hierarchical sorting)  
* `df.sort_values(['col1','col2'], ascending=[True, False])` – Sort col1 ascending, col2 descending  
* `df.sort_index()` – Sort rows by index  
* `df.sort_index(axis=1)` – Sort columns by name (alphabetical)  
* `df.sort_values(by='column', ascending=False)` – Sort
* `df.reset_index(drop=True, inplace=True)` – Reset index

---

### 📝 Notes on Hierarchical Sorting in Pandas

- Hierarchical sorting = sorting by **multiple columns** in order.
- Pandas first sorts by the **first column**, then resolves ties using the **next column(s)**.
- You can control the **order for each column** with `ascending=[True, False]`.

---

### ✅ Example


### 🔹 Output (conceptual)

**Original**

|Dept|Name|Salary|
|---|---|---|
|HR|Alice|3000|
|IT|Bob|4000|
|HR|Charlie|2500|
|IT|David|4500|
|HR|Eve|2500|


```python
# Sort by Dept (asc), then Salary (desc)
df_sorted = df.sort_values(['Dept','Salary'], ascending=[True, False])

print("\nHierarchical Sorted DataFrame:")
print(df_sorted)
```

**Sorted by Dept → Salary(desc)**

|Dept|Name|Salary|
|---|---|---|
|HR|Alice|3000|
|HR|Charlie|2500|
|HR|Eve|2500|
|IT|David|4500|
|IT|Bob|4000|

---

## 🧾 Grouping and Aggregation

* `df.groupby('column', as_index=False).agg({'col1':'sum', 'col2':'count'})` – Aggregation
* `df.groupby(['col1','col2']).size().reset_index(name='count')` – Group and count
* `df.groupby(['col1','col2'],as_index=False).agg(new_col_1=(col_name,'count'),new_col_2 =(col_name,'sum'))`

---

##  🧾 multiple grouping + aggregation

- `groupby()` lets you group rows by one or more columns.
- You can apply **aggregations** like `sum`, `mean`, `count`, `min`, `max` on each group.
- Multiple columns can be grouped together for **hierarchical grouping**.
- Aggregations can be applied on **single or multiple columns** at once.

---

### ✅ Example DataFrame

 
|Dept|Gender|Salary|Bonus|
|---|---|---|---|
|HR|F|3000|500|
|IT|M|4000|800|
|HR|M|2500|400|
|IT|M|4500|1000|
|HR|F|2800|300|
|Finance|F|5000|1200|
 

---

### 📊 Conceptual Output (Dept + Gender grouping)

|Dept|Gender|Salary_mean|Bonus_sum|
|---|---|---|---|
|Finance|F|5000|1200|
|HR|F|2900|800|
|HR|M|2500|400|
|IT|M|4250|1800|

---

👉 **Key idea**:

- First grouped by **Dept**, then within each Dept grouped by **Gender**.    
- Applied **different aggregations** on Salary and Bonus.

---
## 🧠 Conditional Subset

* `df[df['column'] > value]` – Filter rows by condition

---

## 🔭 Filter values from dataset

- `df[(condition1) & (condition 2) .... | (condition n) `
- `df[[column_names][(condition1) | & ..... |& (condition n)]`  

---

## ⏩Update values in a column 

- `df.loc[column_condition,col_name]= new value` 
- `df.loc[df['GENDER'] == 'Unisex','GENDER']= 'U'` 

---

## ⏩ Delete
- Delete : `del df`
- None: `df = None`

---

## ⏩deleting based on criteria
- `del_records=med_delete[(med_delete['Company']=='APPOLO') & (med_delete['GENDER']=='Female')].index` 
- `med_delete.drop(del_records,inplace=True)` 

---

## ⏩ Using `df.melt()` 


### 🧠 What is `df.melt()`?

> `df.melt()` **unpivots** a DataFrame from wide to long format, making it tidy by converting column names into row values.


### 🧩 General Syntax

```python
df.melt(id_vars=None, value_vars=None, var_name=None, value_name='value', ...)
```

#### 📌 Parameters:

| Parameter        | Description                                                           |
| ---------------- | --------------------------------------------------------------------- |
| **`id_vars`**    | Columns to **keep as-is** (the identifiers).                          |
| **`value_vars`** | Columns to **unpivot** (default is all columns **not in** `id_vars`). |
| **`var_name`**   | Name for the new column that will hold the **former column names**.   |
| **`value_name`** | Name for the new column that will hold the **values**.                |

### 📊 Example

#### 🧱 Original Wide Data:

```python
import pandas as pd

df = pd.DataFrame({
    'Name': ['Ram', 'Latha'],
    'Math': [85, 90],
    'Science': [88, 95]
})
```

| Name  | Math | Science |
| ----- | ---- | ------- |
| Ram   | 85   | 88      |
| Latha | 90   | 95      |

#### 🔄 Melt It:

```python
df.melt(id_vars='Name', var_name='Subject', value_name='Marks')
```

#### 📈 Output (Long Format):

| Name  | Subject | Marks |
| ----- | ------- | ----- |
| Ram   | Math    | 85    |
| Latha | Math    | 90    |
| Ram   | Science | 88    |
| Latha | Science | 95    |

## ✅ Summary

* Use `melt()` when you want to **flatten columns into rows**.
* This is helpful in **data cleaning, plotting, and tidy data** practices.
* Works well with **groupby, seaborn, or pivot\_table** later. 

---
## 🧠 What is `df.pivot()`?

> `df.pivot()` reshapes a DataFrame by **turning unique values in one column into new column headers**.
> It’s like making a table or matrix with **rows, columns, and values**.


### 🧩 General Syntax

```python
df.pivot(index=None, columns=None, values=None)
```

### 📌 Parameters:

| Parameter | Description                                             |
| --------- | ------------------------------------------------------- |
| `index`   | Column(s) to **use as row labels**                      |
| `columns` | Column to **use as new columns**                        |
| `values`  | Column to **fill the values** in the reshaped DataFrame |

### 📊 Example

### 🧱 Original Long Format Data:

```python
import pandas as pd

df = pd.DataFrame({
    'Name': ['Ram', 'Ram', 'Latha', 'Latha'],
    'Subject': ['Math', 'Science', 'Math', 'Science'],
    'Marks': [85, 88, 90, 95]
})
```

| Name  | Subject | Marks |
| ----- | ------- | ----- |
| Ram   | Math    | 85    |
| Ram   | Science | 88    |
| Latha | Math    | 90    |
| Latha | Science | 95    |

### 🔄 Pivot It:

```python
df.pivot(index='Name', columns='Subject', values='Marks')
```

### 📈 Output (Wide Format):

| Subject | Math | Science |
| ------- | ---- | ------- |
| Latha   | 90   | 95      |
| Ram     | 85   | 88      |

### ⚠️ Important Notes:

* `pivot()` **requires unique combinations** of `index` and `columns`.
* If duplicates exist, use `pivot_table()` instead, which can aggregate values (like using `sum`, `mean`, etc.).

---

## 🔄  Application:  Data Reshaping with Melt, GroupBy, and Pivot in Pandas

### 📊 Dataset

```python
import pandas as pd

# Create dataset
df = pd.DataFrame({
    'Dept': ['HR','IT','Finance'],
    'Q1_Sales': [1000, 1500, 1200],
    'Q2_Sales': [1100, 1400, 1300],
    'Q3_Sales': [1050, 1600, 1250]
})
```

|Dept|Q1_Sales|Q2_Sales|Q3_Sales|
|---|---|---|---|
|HR|1000|1100|1050|
|IT|1500|1400|1600|
|Finance|1200|1300|1250|

---
### ❓ What is the average sales across all departments for each quarter?

- In the original dataset, sales were stored in **separate columns (Q1_Sales, Q2_Sales, Q3_Sales)**.
- To calculate averages **per quarter across all departments**, we must **melt into long format** → group by **Quarter** → take mean of **Sales**.

---

### 📊 Melt the Dataset

👉 Convert wide format into long format (`pd.melt`)

```python
df_melted = pd.melt(df, id_vars=['Dept'], var_name='Quarter', value_name='Sales')
```

|Dept|Quarter|Sales|
|---|---|---|
|HR|Q1_Sales|1000|
|IT|Q1_Sales|1500|
|Finance|Q1_Sales|1200|
|HR|Q2_Sales|1100|
|IT|Q2_Sales|1400|
|Finance|Q2_Sales|1300|
|HR|Q3_Sales|1050|
|IT|Q3_Sales|1600|
|Finance|Q3_Sales|1250|

---

### 📊 Group by on Melted Columns

👉 Now we can group by **Quarter** (and even Dept if needed).

```python
df_grouped = df_melted.groupby('Quarter')['Sales'].mean().reset_index()
```

|Quarter|Sales_mean|
|---|---|
|Q1_Sales|1233.33|
|Q2_Sales|1266.67|
|Q3_Sales|1300.00|

---
### ❓ “What are the total sales for each department in each quarter?

- Wide format isn’t directly groupable by quarter.
- After melting, `Quarter` becomes its own column → we can `groupby(['Dept','Quarter']).sum()`.

---

### 📊 Group by Dept + Quarter

👉 More detailed grouping.

```python
df_grouped2 = df_melted.groupby(['Dept','Quarter'])['Sales'].sum().reset_index()
```

|Dept|Quarter|Sales_sum|
|---|---|---|
|Finance|Q1_Sales|1200|
|Finance|Q2_Sales|1300|
|Finance|Q3_Sales|1250|
|HR|Q1_Sales|1000|
|HR|Q2_Sales|1100|
|HR|Q3_Sales|1050|
|IT|Q1_Sales|1500|
|IT|Q2_Sales|1400|
|IT|Q3_Sales|1600|

---

### ❓ Show me total sales for each department broken down by quarter

Let’s extend it with a **pivot step**. After melting and grouping, we can pivot back to wide format to answer questions more cleanly.

Here’s just the **pivot code**:

```python
# Pivot: Total sales for each Dept across Quarters
df_pivot = df_melted.pivot_table(
    index='Dept',        # rows
    columns='Quarter',   # columns
    values='Sales',      # values
    aggfunc='sum'        # aggregation
).reset_index()

print(df_pivot)
```

---

### 📊 Example Output

|Dept|Q1_Sales|Q2_Sales|Q3_Sales|
|---|---|---|---|
|Finance|1200|1300|1250|
|HR|1000|1100|1050|
|IT|1500|1400|1600|

---

👉 This answers the business question:  
