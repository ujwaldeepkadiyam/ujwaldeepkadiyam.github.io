---
title: Joining, Relationship And Data Modeling
layout: page
permalink: /teaching/Data Science/Python-for-Data-Wrangling/quick_reference/lec_3/
hide_title: true
parent: Python-for-Data-Wrangling
grand_parent: Data Science
---

<h1 align="center"> 3. Joining, Relationship And Data Modeling</h1>
<!-- # 📘 Python Session-3 Joining, Relationship And Data Modeling -->


---

## 1. 🧱 Types of Joining

### 🔼 Vertical Join – Appending Tables
- Combine datasets **row-wise** (same structure)
- **Rules**:
  - Same number of columns
  - Same data types
  - Order of columns matters

```python
pd.concat([df1, df2], ignore_index=True)
```
```python
pd.concat([df1,df2,df3], ignore_index = True)
```
---

##  Union vs Unionall

| Operation   | Description                                       |     |
| ----------- | ------------------------------------------------- | --- |
| UNION       | Combines datasets **and removes duplicates**      |     |
| UNION ALL   | Combines datasets **and keeps all rows**          |     |


🧪 In **Pandas**, these map to:

- `UNION` → `pd.concat(...).drop_duplicates()`

- `UNION ALL` → `pd.concat(...)`


---

### 🔁 Horizontal Join – Merging Tables

* Combine datasets **column-wise** using a key
-  Must specify `on` (common key)
- Use `how` for type of join
-  **Rules for Horizontal Join** 
	1. **Keys Must Match**
		- Joins happen on one or more common columns (or index).         
	    - If names differ, use `left_on` and `right_on`.
	2. **Data Types Must Match** 
		- The join columns in both DataFrames should have the same datatype (e.g., both `int` or both `str`). 
	3. **Choose the Right Join Type (`how`)**     
	    - `inner` → only matching rows.
        - `left` / `right` → keep all from one side, match from the other.
	    - `outer` → keep all rows from both sides, fill missing with NaN.
	    - 
---

## 2. 📚 Practice with Vertical Join

### ✅ Scenario-Based Appending

* Scenario 1–5 cover:

  * Exact match appending
  * Column mismatch handling
  * Column renaming for compatibility
  * Adding missing columns

### ⚖️ Union vs Union All

* **Union** removes duplicates
* **Union All** retains all records

---

## 3. 🔗 Horizontal Join – Merging Datasets

### Types of Horizontal Joins in Python

#### 🔍 `INNER JOIN`

* Returns records with matching keys in both datasets

```python
pd.merge(df1, df2, how='inner', on='key')
```

#### 🌐 `FULL OUTER JOIN`

* Returns all records from both datasets, fills unmatched with NaN

```python
pd.merge(df1, df2, how='outer', on='key')
```

#### 🚫 `UNMATCHED JOIN`
- We want records that are present only from left table and records that are present only in right table
- So do outer join first and then filter.

## 📊 Step 1: Sample Datasets

**Left Table**

|ID|Name|
|---|---|
|1|Alice|
|2|Bob|
|3|Charlie|

<br>

**Right Table**

|ID|Salary|
|---|---|
|2|6000|
|3|7000|
|4|8000|

---

## 📊 Step 2: Outer Join

```python
merged = pd.merge(left, right, on='ID', how='outer')
```

**Outer Join Result**

|ID|Name|Salary|
|---|---|---|
|1|Alice|NaN|
|2|Bob|6000|
|3|Charlie|7000|
|4|NaN|8000|

---

## 📊 Step 3: Identify Columns

- **From Left Table:** `Name`
    
- **From Right Table:** `Salary`
    

---

## 📊 Step 4: Records Only in Left Table

👉 Check `Salary` (from right) for **NaN**

```python
only_left = merged[merged['Salary'].isnull()]
```

|ID|Name|Salary|
|---|---|---|
|1|Alice|NaN|

---

## 📊 Step 5: Records Only in Right Table

👉 Check `Name` (from left) for **NaN**

```python
only_right = merged[merged['Name'].isnull()]
```

|ID|Name|Salary|
|---|---|---|
|4|NaN|8000|

---

✅ **Summary:**

- Outer join gives all records.
- **Unmatched left** = rows where **right’s column is NULL**.
- **Unmatched right** = rows where **left’s column is NULL**.
- **Unmatched** = Combine these two.

---

#### ⬅️ `LEFT OUTER JOIN`

* All records from the left dataset, matched from right

```python
pd.merge(df1, df2, how='left', on='key')
```

#### ❌ `LEFT NULL JOIN`

* Only left records **without** a match in right
	1. Perform an **left join** between left and right tables.
	2. Identify a column that comes from the **right table**.
	3. Filter rows where that **right table column is `isnull()`**.
	4. The result = records that exist **only in the left table**.

```python
pd.merge(df_left, df_right, how='left', on='key')[df_right['column_name'].isnull()]
```

#### ➡️ `RIGHT OUTER JOIN`

* All records from the right dataset, matched from left

```python
pd.merge(df1, df2, how='right', on='key')
```

#### 🚫 `RIGHT NULL JOIN`

* Only right records **without** a match in right
	1. Perform an **right join** between left and right tables.
	2. Identify a column that comes from the **left table**.
	3. Filter rows where that **left table column is `isnull()`**.
	4. The result = records that exist **only in the right table**.
```python
pd.merge(df_left, df_right, how='right', on='key')[df_left['column_name'].isnull()]
```

---

## 4. 🧪 Merging Rules Summary

* **inner** = matched rows only
* **outer** = all rows from both sides
* **left** = all from left, matched from right
* **right** = all from right, matched from left

---

| Join Type      | Description                                                                 |
|----------------|-----------------------------------------------------------------------------|
| **Inner Join**     | Returns records with matching keys in both tables                            |
| **Left Join**      | Returns all records from left table, matched records from right (nulls if no match) |
| **Right Join**     | Returns all records from right table, matched records from left (nulls if no match) |
| **Full Outer Join**     | Returns all records from both tables; fills nulls where no match              |
| **Unmatched Join** | Returns only records that **do not** match between tables                      |  

- All joins are based on **matching keys (e.g., ID)**  

- Nulls are used where a match is missing in either table



| Join Filter Type   | Description                                                         |
|--------------------|---------------------------------------------------------------------|
| **Left Null Join** | Subset of left join with records that **had no match in right**     |
| **Right Null Join**| Subset of right join with records that **had no match in left**     |
| **Unmatched Only** | Includes **only non-overlapping** records from both left and right  |



- These are typically implemented using `merge` + `isnull()` filters  

-  Helpful in identifying **data mismatches**, **orphans**, or **gaps in datasets**

---


## 🔹 ADVANCED JOINING

### 🔗 Multi-Column Join
Join based on multiple keys using `on=['PRODUCT', 'CITY']`.

#### 🧪 Example
```python
pd.merge(left=prod_units, right=prod_price, how='inner', on=['PRODUCT', 'CITY'])
````

### 💲 Add Sales Column

```python
df['SALES'] = df['UNITS'] * df['PRICE']
```

---

## 🧮 Types of Joins with Multi-Keys

### 🔍 Inner Join

* Returns only matching records from both datasets.

### 🌐 Full Outer Join

* Returns all records from both datasets; unmatched columns filled with NaN.

### 🚫 Unmatched Join

* Extract rows with mismatched values in either side.

```python
df[df['UNITS'].isnull() | df['PRICE'].isnull()]
```

### ⬅️ Left Join

* Returns all rows from the left table and matched from right.

### ❌ Left Null Join

* Only left table rows without a matching right table record.

```python
df[df['PRICE'].isnull()]
```

### ➡️ Right Join

* All rows from the right and matching from left.

### 🚫 Right Null Join

* Right table rows with no match in left table.

```python
df[df['UNITS'].isnull()]
```

---

## 🏷️ Use of `suffixes` in Merges

When merging datasets with overlapping column names, use:

```python
pd.merge(df1, df2, how='inner', on='ACC_NO', suffixes=('_Jan', '_Feb'))
```

---

## 📘 Data Models

## 🧊 Types of Data Models

## 🔑 Primary Key vs Foreign Key

- **Primary Key (PK)**    
    - A column (or set of columns) in a table that **uniquely identifies each row**.
	- Cannot contain duplicates or NULLs. 
	
- **Foreign Key (FK)**    
    - A column in one table that refers to the **Primary Key** in another table.        
    - Used to create relationships between tables.  
## ⭐ Star Schema – With PK and FK 

 - A central **fact table** connects directly to all **dimension tables**.
- Simple and flat structure, ideal for query performance.

- **Fact Table (center):**    
    - Stores **measures** (numeric facts, e.g., `SalesAmount`, `Quantity`).        
    - Contains **Foreign Keys (FKs)** pointing to dimension tables.        
- **Dimension Tables (surrounding):**    
    - Contain descriptive attributes (e.g., customer name, product category, date info).        
    - Each dimension table has a **Primary Key (PK)**.        
- **Connections (PK ↔ FK):**    
    - Fact table’s **FKs** reference dimension table **PKs**.        
    - This establishes relationships, linking raw numbers (facts) with descriptive context.       

---

### 📊 Example

- **Fact Table – `SalesFact`**
    
    - Columns: `DateKey (FK)`, `ProductKey (FK)`, `CustomerKey (FK)`, `SalesAmount`, `Quantity`
        
- **Dimension Tables**    
    - `DimDate (DateKey → PK, Date, Month, Year)`         
    - `DimProduct (ProductKey → PK, ProductName, Category)`        
    - `DimCustomer (CustomerKey → PK, CustomerName, Region)`        

- **Relationship:**
	- `SalesFact.ProductKey (FK)` → `DimProduct.ProductKey (PK)`     
	- `SalesFact.CustomerKey (FK)` → `DimCustomer.CustomerKey (PK)`    
	- `SalesFact.DateKey (FK)` → `DimDate.DateKey (PK)`    

---


### ❄️ 2. SNOWFLAKE SCHEMA – With PK and FK

* Dimension tables are further normalized into sub-dimensions.
* More complex structure; better for detailed analysis but slower queries.

- **Fact Table (center):**    
    - Stores **measures** (numeric facts, e.g., `SalesAmount`, `Quantity`).        
    - Contains **Foreign Keys (FKs)** pointing to **dimension tables**.        
- **Dimension Tables (main level):**    
    - Contain descriptive attributes like product, customer, and date.        
    - Each dimension table has a **Primary Key (PK)**.        
    - Unlike star schema, these dimensions may not hold all attributes directly.     
-  **Sub-Dimensions** 
	- Dimension tables may be **split further into normalized sub-dimensions**.    
	- Each sub-dimension has its own **Primary Key (PK)**.    
	- Main dimensions hold a **Foreign Key (FK)** pointing to these sub-dimensions.    
	- This normalization reduces redundancy but increases the number of joins.
    

---

### 📊 Example Schema

- **Fact Table – `SalesFact`**    
    - Columns: `DateKey (FK)`, `ProductKey (FK)`, `CustomerKey (FK)`, `SalesAmount`, `Quantity`        
- **Main Dimension Tables**    
    - `DimDate (DateKey → PK, Day, MonthKey (FK))`        
    - `DimProduct (ProductKey → PK, ProductName, CategoryKey (FK))`        
    - `DimCustomer (CustomerKey → PK, CustomerName, RegionKey (FK))`        
- **Sub-Dimensions**    
    - `DimMonth (MonthKey → PK, MonthName, Quarter, YearKey (FK))`        
    - `DimYear (YearKey → PK, YearNumber)`        
    - `DimCategory (CategoryKey → PK, CategoryName, DepartmentKey (FK))`        
    - `DimDepartment (DepartmentKey → PK, DepartmentName)`        
    - `DimRegion (RegionKey → PK, RegionName, Country)`

---

### 🔗 Relationships (PK ↔ FK)

- `SalesFact.ProductKey (FK)` → `DimProduct.ProductKey (PK)`    
- `DimProduct.CategoryKey (FK)` → `DimCategory.CategoryKey (PK)`    
- `DimCategory.DepartmentKey (FK)` → `DimDepartment.DepartmentKey (PK)`    
- `SalesFact.CustomerKey (FK)` → `DimCustomer.CustomerKey (PK)`    
- `DimCustomer.RegionKey (FK)` → `DimRegion.RegionKey (PK)`    
- `SalesFact.DateKey (FK)` → `DimDate.DateKey (PK)`    
- `DimDate.MonthKey (FK)` → `DimMonth.MonthKey (PK)`    
- `DimMonth.YearKey (FK)` → `DimYear.YearKey (PK)`     

---

✅ **In short:**

- **Star Schema** → Flat, one-level dimensions, Ideal for performance and reporting.    
- **Snowflake Schema** → Dimensions broken into **main + sub-dimensions** (normalized), Preferred for normalized data and flexibility
