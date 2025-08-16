---
layout: page
# layout: page_no_title
permalink: /teaching/
title: Teaching
hide_title: true
description: ""
nav: true
nav_order: 6
---

<!-- hiding the title in display -->
<!-- 
For now, this page is assumed to be a static description of your courses. You can convert it to a collection similar to `_projects/` so that you can have a dedicated page for each course.

Organize your courses by years, topics, or universities, however you like! -->



<div class="row">
    <div class="col-sm-12">
        <h2 class="page-header" style="text-align: center; color: blue;"><strong style="color: #cc33cc;">Courses Taught</strong></h2>
        
        <p>Here is a list of the courses I have taught as an instructor. You will find course materials, reading lists and any other information here. The courses are grouped based on Specializaton.</p>


        <p>Jump to:
        <a href="#maths">Mathematical Foundations</a> |
        <a href="#data-science">Data Science</a></p>

        <h2 id="maths">Mathematical Foundations</h2>
        <ul>
            {% for course in site.teaching %}
            {% if course.category == "Mathematical Foundations" %}
            <li>
                <a href="{{ course.url }}">{{ course.title }}</a>
                ({{ course.course_number }}) - {{ course.term }}
            </li>
            {% endif %}
            {% endfor %}
        </ul>

        <h2 id="data__science">Data Science</h2>
        <ul>
            {% for course in site.teaching %}
            {% if course.category == "Data Science" %}
            <li>
                <a href="{{ course.url }}">{{ course.title }}</a>
                ({{ course.course_number }}) - {{ course.term }}
            </li>
            {% endif %}
            {% endfor %}
        </ul>
    </div>
</div>

