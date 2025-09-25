---
title: Basic Navigation And Programming
layout: page
permalink: /teaching/Data Science/Python-for-Data-Wrangling/quick_reference/lec_1/
hide_title: true
parent: Python-for-Data-Wrangling
# grand_parent: "Python-for-Data-Wrangling"
---

<h1 align="center"> 1. Basic Navigation And Programming</h1>

## ✅ Python Version Check
- `from platform import python_version`
- `print(python_version())`

---

## 🧠 Variables and Data Types
- `instutute_name = 'DV Analytics'` – String
- `type(instutute_name)`
- `customer_age = 18` – Integer
- `type(customer_age)`
- `total_sales = 100.890` – Float
- `type(total_sales)`
- `value = 100 + 3j` – Complex
- `type(value)`
- `value_range = range(0, 10)` – Range
- `type(value_range)`
- `print(list(value_range))`

---

## 🔁 Comparison Operators
- `x > y` – Greater than
- `x < y` – Less than
- `x != y` – Not equal to
- `x == y` – Equal to

---

## 🔘 Boolean Type
- `type(True)`
- `type(False)`

---

## 📚 Collection Data Types

### List
- `stu_name = ['ravi','kiran','sohail','arbaz']`
- `type(stu_name)`

### Tuple
- `stu_name = ('ravi','kiran','sohail','arbaz')`
- Tuples are immutable

### Set
- `stu_name = {'ravi','kiran','sohail','arbaz'}`
- Cannot index or update individual items
- `set.update([items])`

### Dictionary
- `stu_name = {'ravi':23,'kiran':34}`
- `stu_name['ravi']` – Access/Update
- `del stu_name['ravi']` – Delete
- `stu_name.update({'new': 45})` – Merge


---

## 🔹 Comparison of Python Data Structures and Their Operations

|**Operation**|**List**|**Tuple**|**Set**|**Dictionary**|
|---|---|---|---|---|
|**Creation**|`list1 = [1,2,3]`|`tup1 = (1,2,3)`|`set1 = {1,2,3}`|`dict1 = {"a":1, "b":2}`|
|**Indexing / Slicing**|✅ Supports indexing & slicing|✅ Supports indexing & slicing|❌ Not ordered (since Python 3.7+, insertion order is preserved but no indexing)|✅ Key-based access `dict1["a"]`|
|**Mutable / Immutable**|✅ Mutable|❌ Immutable|✅ Mutable (but only immutable elements allowed)|✅ Mutable|
|**Add Elements**|`append(x)`, `insert(i,x)`, `extend(iterable)`|❌ Not possible (immutable)|`add(x)`, `update(iterable)`|`dict[key] = value`, `update({...})`|
|**Remove Elements**|`remove(x)`, `pop([i])`, `clear()`, `del list[i]`|❌ Not possible|`remove(x)`, `discard(x)`, `pop()`, `clear()`|`pop(key)`, `popitem()`, `del dict[key]`, `clear()`|
|**Modify Elements**|Direct assignment: `list[i] = x`|❌ Not possible|❌ No index-based modification (must remove & add again)|Direct assignment: `dict[key] = new_value`|
|**Concatenation**|`list1 + list2`|`tup1 + tup2`|❌ Use union: `set1|set2`|
|**Repetition**|`list1 * 3`|`tup1 * 3`|❌ Not supported|❌ Not supported|
|**Membership Test**|`x in list1`|`x in tup1`|`x in set1` (fast, O(1))|`key in dict1` (checks keys only)|
|**Sorting**|`list.sort()` (in-place), `sorted(list)`|❌ Not possible|`sorted(set1)` (returns list)|`sorted(dict1)` (returns sorted keys)|
|**Length**|`len(list1)`|`len(tup1)`|`len(set1)`|`len(dict1)`|
|**Iteration**|✅ Iterates elements|✅ Iterates elements|✅ Iterates elements|✅ Iterates keys (values via `.values()`)|
|**Copying**|`copy()`, slicing `[:]`|`tup2 = tuple(tup1)`|`copy()`|`copy()`|
|**Comprehensions**|✅ List comprehension `[x*2 for x in list1]`|❌ No tuple comprehension (but generator works)|✅ Set comprehension `{x*2 for x in set1}`|✅ Dict comprehension `{k:v*2 for k,v in dict1.items()}`|

---

# 📝 Key Notes on Modifications

- **List** → Fully mutable: add, delete, change elements in place.
- **Tuple** → Immutable: cannot be changed after creation; only supports reading.
- **Set** → Mutable: can add/remove, but no indexing; only unique immutable elements allowed.
- **Dictionary** → Mutable: add, remove, update key-value pairs.

---

## 🔹 Modification Operations in Python Data Structures

|**Operation Type**|**List**|**Tuple**|**Set**|**Dictionary**|
|---|---|---|---|---|
|**Add / Insert**|`append(x)` → add at end `insert(i, x)` → insert at index `extend(iterable)` → add multiple|❌ Not allowed (immutable)|`add(x)` → add one `update(iterable)` → add multiple|`dict[key] = value` → add new key-value `update({...})` → merge/update|
|**Modify / Update**|`list[i] = x` → change element|❌ Not allowed|❌ No direct index-based update (remove & re-add needed)|`dict[key] = new_value` → update value for key|
|**Remove Specific**|`remove(x)` → by value `pop([i])` → by index `del list[i]`|❌ Not allowed|`remove(x)` → error if missing `discard(x)` → safe remove|`pop(key)` → remove by key `del dict[key]`|
|**Remove Arbitrary**|`pop()` → last element|❌ Not allowed|`pop()` → removes arbitrary element|`popitem()` → removes last inserted key-value|
|**Clear All**|`clear()`|❌ Not allowed|`clear()`|`clear()`|
|**Delete Entire Object**|`del list1`|`del tuple1`|`del set1`|`del dict1`|

---

# ➕ Basic Arithmetic Operators
- `x + y` – Addition
- `x - y` – Subtraction
- `x * y` – Multiplication
- `x / y` – Division
- `x // y` – Floor Division
- `x % y` – Modulus
- `x ** y` – Exponent

---

## 🔠 String Indexing and Slicing
- `x[0]` – First character
- `x[-1]` – Last character
- `x[0:3]` – Substring from 0 to 2

---

## 🔁 List Operations
- `list[1] = 'new'` – Update
- `del list[1]` – Delete
- `list1 + list2` – Concatenate

---

## ⚠️ Tuple Limitations
- Tuples are immutable
- Cannot update or delete elements

---

## 🔁 Set Operations
- `set.update([elements])` – Add multiple items
- Sets do not support indexing or item updates

---

## 📒 Dictionary Operations
- `dict['key']` – Access or update
- `del dict['key']` – Delete key
- `dict.update({'key': value})` – Add/merge key

---

## 🧮 Basic Math Computation
- `a = 100`
- `b = 200`
- `c = a + b`

---

## 📊 Creating a Pandas DataFrame
- `import pandas as pd`
- `df = pd.DataFrame({...})`

---

## 🔎 Exploring a DataFrame
- `df.shape` – Shape of data
- `df.head()` – First 5 rows
- `df.tail()` – Last 5 rows
- `df.info()` – Structure info
- `df.describe()` – Statistical summary

---

## 🧭 Selecting Data in DataFrame
- `df.loc[1:3]` – Rows by label
- `df.iloc[0:3]` – Rows by position
- `df[['col1', 'col2']]` – Select columns

---

## 🛠️ Modify DataFrame Structure
- `df['new_col'] = value` – Add column
- `df.drop(['col'], axis=1)` – Drop column
- `df.rename(columns={'old':'new'}, inplace=True)` – Rename

---

## 🧹 Truncate a DataFrame

- `df_empty = df.iloc[0:0]` – Empty DataFrame
### 🔹 `loc` vs `iloc`

- **`.loc[]`** → Selection **by label (row/column names)**
- **`.iloc[]`** → Selection **by position (row/column index numbers)** 

### ✅ Examples

- `df.loc[1:3]` – Select rows **with labels** `1` through `3` (inclusive)
- `df.iloc[0:3]` – Select rows **at positions** `0`, `1`, `2` (Python slicing end-exclusive)
- `df.loc[:, ['col1', 'col2']]` – Select columns by **labels**
- `df.iloc[:, [0, 2]]` – Select columns by **positions**

---

### 📝 Syntax

- `df.loc[row_labels, column_labels] = values`  
    → modifies based on **row and column names**.
    
- `df.iloc[row_positions, column_positions] = values`  
    → modifies based on **row and column index numbers**.
    

---
## 📂 File Import and Export
- `pd.read_excel(path)`
- `pd.read_csv(path)`
- `df.to_excel(path, index=False)`
- `df.to_csv(path, index=False)`

---

## 🗃️ SQL Server Integration
- `from sqlalchemy import create_engine`
- `engine = create_engine(...)`
- `pd.read_sql(query, conn)`
- `df.to_sql('table', engine, index=False)`

---

## 🧾 Subset or Filter Data
- `df_new = df[100:200]` – Slice rows
- `df_new = df[['col1', 'col2']]` – Select columns
- `df_new = df.drop(columns)` – Drop columns

---
