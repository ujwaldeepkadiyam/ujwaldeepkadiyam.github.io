---
title: Computation and Visualization
layout: page
permalink: /teaching/Data Science/Python-for-Data-Wrangling/quick_reference/lec_5/
hide_title: true
parent: Python-for-Data-Wrangling
# grand_parent: "Python-for-Data-Wrangling"
---

<h1 align="center"> 5. Joining, Relationship And Data Modeling</h1>

<!-- # 📘 Python Session-5 Computation and Visualization -->

## 🔹 1. Introduction to NumPy
- NumPy stands for **Numerical Python**
- Used for efficient numerical computation with arrays and matrices

---

## 🔹 2. NumPy Basics

### ✅ Check Version
```python
import numpy as np
print(np.__version__)
````

---

## 🔹 3. Array Creation and Manipulation

### 📦 Create Arrays

```python
import numpy as np

# 1D array from a Python list
np.array([1, 2, 3])  

# 2D array (matrix) from a nested list
np.array([[1, 2], [3, 4]])  

# 2x3 array filled with zeros
np.zeros((2, 3))  

# 3x2 array filled with ones
np.ones((3, 2))  

# Array from 0 to 10 (exclusive), step of 2 → [0, 2, 4, 6, 8, 10]
np.arange(0, 12, 2)  

```

### 🔄 Reshape Arrays

```python
arr.reshape((2, 3))
```

---

## 🔹 4. Array Data Types

### 🧪 Specify and Convert Data Types

```python
arr = np.array([1, 2, 3], dtype=np.float64)
arr.astype(np.int64)
arr.dtype
```

---

## 🔹 5. Array Operations

### ➕ Element-wise Arithmetic

```python
a + b
a - b
a * b
a / b
```

---

## 🔹 6. Looping Concepts

### 🔁 For Loop in Python

- A `for` loop is used to **iterate** over a sequence (list, tuple, string, range, etc.).
    
- Syntax:
 ```python
for variable in sequence:
    # code block (executed for each item)
```

---

### ✅ Examples

```python
# Example 1: Loop through a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)  
# Output:
# apple
# banana
# cherry
```

```python
# Example 2: Loop through a range of numbers
for i in range(5):  
    print(i)  
# Output: 0, 1, 2, 3, 4
```

```python
# Example 3: Loop with start, stop, step
for i in range(2, 10, 2):  
    print(i)  
# Output: 2, 4, 6, 8
```

```python
# Example 4: Loop through a string
for char in "Python":  
    print(char)  
# Output: P, y, t, h, o, n
```


---

## 🔄 Nested For Loops in Python

- A **nested loop** means a loop inside another loop.    
- The **outer loop** runs first, and for each iteration of the outer loop, the **inner loop** runs completely.    
- Syntax:
 ```python
for variable1 in sequence1:
     for variable2 in sequence2:
         # code block
```


---

### ✅ Example 1: Multiplication Table (2 to 3)

```python
for i in range(2, 4):      # outer loop → numbers 2 and 3
    for j in range(1, 6):  # inner loop → numbers 1 to 5
        print(f"{i} x {j} = {i*j}")
    print("----")  # separator after each table
```

**Output:**

```
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
----
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15
----
```

---

### ✅ Example 2: Print Matrix Elements

```python
matrix = [[1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]]

for row in matrix:         # outer loop → each row
    for val in row:        # inner loop → each element in row
        print(val, end=" ")
    print()                # new line after each row
```

**Output:**

```
1 2 3
4 5 6
7 8 9
```


---

## 🔁 While Loop in Python

- A **`while` loop** keeps executing as long as the condition is **True**.    
- Syntax:    
```python
while condition:
     # code block (runs repeatedly until condition becomes False)
```

---

### ✅ Example 1: Counting Numbers

```python
i = 1
while i <= 5:   # loop continues as long as i <= 5
    print(i)
    i += 1      # increment i to avoid infinite loop
```

**Output:**

```
1
2
3
4
5
```

---

### ✅ Example 2: Using `break` to Stop Early

```python
i = 1
while i <= 10:
    if i == 6:   # stop the loop when i = 6
        break
    print(i)
    i += 1
```

**Output:**

```
1
2
3
4
5
```

---

### ✅ Example 3: Using `continue` to Skip

```python
i = 0
while i < 5:
    i += 1
    if i == 3:   # skip printing 3
        continue
    print(i)
```

**Output:**

```
1
2
4
5
```

---

### ✅ Example 4: Infinite Loop (⚠️ careful)

```python
while True:
    print("This will run forever unless stopped manually!")
    break   # added to stop execution
```

---

## 🔄 For vs While Loops in Python

|Feature|**For Loop**|**While Loop**|
|---|---|---|
|**Use Case**|When the **number of iterations is known** (e.g., looping over a range, list)|When the **number of iterations is not known** and depends on a condition|
|**Syntax**|`for var in sequence:`|`while condition:`|
|**Iteration Control**|Automatically iterates over items in a sequence|Must manually update variables inside loop to avoid infinite loop|
|**Termination**|Stops when sequence is exhausted|Stops when condition becomes `False`|
|**Typical Example**|Iterating through list, string, dictionary, or range|Reading user input until a certain condition, looping until a flag is reached|
|**Risk**|Low risk of infinite loop (since sequence ends naturally)|Higher risk of infinite loop if condition never becomes `False`|
|**Best For**|Definite loops (fixed count)|Indefinite loops (unknown count, runs until condition met)|

### ✅ Quick Example

```python
# For Loop (definite iteration)
for i in range(5):
    print(i)

# While Loop (indefinite iteration)
i = 0
while i < 5:
    print(i)
    i += 1
```

---

## 🔹 7. Looping to Generate Lists

### 📈 Loop 1 to 10 and Store in List

```python
x = []
for i in range(1, 11):
    x.append(i)
```

---

## 🔹 8. Looping for Calculations

### 🔽 Backward Loop (1000 to 100)

```python
for i in range(1000, 0, -100):
    ...
```

### 🔼 Forward Loop (100 to 1000)

```python
for i in range(100, 1100, 100):
    ...
```

---

## 🔹 9. Compound Interest Calculation

### 💰 Logic:

```python
capital += capital * interest_rate
```

Loop over years and append yearly result to list → DataFrame

---

## 🔹 10. Investment Calculations

### 💵 Fixed Deposits

Loop for fixed return on same capital

### 💸 Recurring Deposits

Loop for monthly contributions and interest accumulation

---

## 🔹 11. Loop Breaks / Control Flow

* `break`, `continue`, custom "do while" style using `while True`

---

## 🔹 12. Currency Format

### 💲 Format Numbers

```python
f"${value:,.2f}"
```

---

## 🔹 13. Nested Loops

### ⏹️ Loop inside loop for multi-step calculations

---

## 🔹 14. Advanced Array Calculation

### ➕ Add constant to entire array

```python
sales = np.array([...])
sales + 100
```

---



## 🔹 15. 🧮 Linear Algebra

### 🔢 Matrix Operations
```python
matrix_a = np.array([[1, 2], [3, 4]])
matrix_b = np.array([[5, 6], [7, 8]])

# Dot product
np.dot(matrix_a, matrix_b)

# Transpose
matrix_a.T
````

---

## 🔹 16. 🧠 NumPy in Practice

### 🛠 Handling Missing Data

```python
array_with_nan = np.array([1, 2, np.nan, 4])
array_without_nan = np.nan_to_num(array_with_nan, nan=0)
```

---

## 🔹 17. 💾 Input and Output

### 📥 Save/Load Arrays

```python
np.savetxt('array.txt', array_to_save)
np.loadtxt('array.txt')
```

---

## 🔹 18. 📊 Charts and Visualization


---

### 📈 Vertical Bar Chart

- 📊 **Definition**: A vertical bar chart uses rectangular bars standing upright to represent data, where the bar height is proportional to the value.    
- 🔎 **Usage**: Best for comparing **discrete categories** (e.g., sales by product, population by city).    
- 🎯 **Axis Orientation**: Categories are placed on the **x-axis**, and values (frequencies, counts, or measures) are shown on the **y-axis**.

```python
plt.bar(df['STATE_CODE'], df['SUBS'])
plt.xlabel('STATES')
plt.ylabel('SUBS')
plt.title('STATE WISE SUBSCRIBER')
plt.show()
```

---

### 📉 Horizontal Bar Chart

- 📊 **Definition**: A horizontal bar chart uses rectangular bars extending sideways to represent data, where the bar length is proportional to the value.     
- 🔎 **Usage**: Useful when category labels are long or when comparing many categories for better readability.     
- 🎯 **Axis Orientation**: Categories are placed on the **y-axis**, and values (frequencies, counts, or measures) are shown on the **x-axis**.     


```python
plt.barh(df['STATE_CODE'], df['SUBS'])
plt.xlabel('SUBS')
plt.ylabel('STATES')
plt.title('STATE WISE SUBSCRIBER')
plt.show()
```

---

### 🥧 Pie Chart


- 🥧 **Definition**: A pie chart is a circular chart divided into slices, where each slice represents a category’s proportion of the whole.    
- 🔎 **Usage**: Best for showing **percentage or proportional data** that adds up to 100%.    
- ⚠️ **Limitations**: Hard to compare many categories or very small differences; better for simple distributions with few slices.

```python
plt.pie(SUBS, labels=STATES, autopct='%1.1f%%', startangle=140)
plt.title('STATE WISE SUBS RATE')
plt.show()
```

---

### 🧿 3D Pie Chart (Exploded Slice)

- 🥧 **Definition**: A 3D pie chart is a pie chart displayed with a three-dimensional visual effect, giving depth to the slices.     
- 🎨 **Usage**: Often used for presentation purposes to make visuals more attractive, but it shows the same proportional data as a regular pie chart.    
- ⚠️ **Limitations**: Can be misleading because the 3D perspective may distort slice sizes, making accurate comparison harder.


```python
explode = (0.1, 0, 0, 0)
plt.pie(Runs, explode=explode, labels=Players, autopct='%1.1f%%',
        shadow=True, startangle=90)
plt.axis('equal')
plt.show()
```

---

### 📉 Line Chart


- 📈 **Definition**: A line chart uses points connected by straight lines to show trends or changes in data over time or another continuous variable.    
- 🔎 **Usage**: Best for visualizing **trends, progressions, or patterns** (e.g., stock prices, sales over months).    
- 🎯 **Axis Orientation**: Independent variable (e.g., time) on the **x-axis**, dependent values on the **y-axis**.


```python
plt.plot(df['Date'], df['Value_A'], marker='o', label='Value A')
plt.plot(df['Date'], df['Value_B'], marker='o', label='Value B')
plt.legend()
plt.grid(True)
plt.show()
```

---

### 🌡️ Heatmap

- 🌡️ **Definition**: A heat map is a data visualization that uses **color intensity or gradients** to represent values in a matrix-like format.    
- 🔎 **Usage**: Best for showing **patterns, correlations, and intensity** across two variables (e.g., correlation matrices, website click maps).    
- 🎯 **Interpretation**: Darker or brighter colors indicate **higher or lower values**, making it easy to spot clusters, trends, or anomalies.

```python
sns.heatmap(df, annot=True, cmap='YlGnBu', linewidths=0.5, linecolor='gray')
plt.title('Heatmap using Seaborn')
```




