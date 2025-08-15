---
layout: page
permalink: /teaching/
title: teaching
description: Materials for courses you taught. Replace this text with your description.
nav: true
nav_order: 6
---
<!-- 
For now, this page is assumed to be a static description of your courses. You can convert it to a collection similar to `_projects/` so that you can have a dedicated page for each course.

Organize your courses by years, topics, or universities, however you like! -->

<div class="row">
    <div class="col-sm-12">
        <h2 class="page-header">COURSES</h2>
        <p>A list of the courses I have taught as an instructor or TA.</p>

        <ul>
            {% for course in site.teaching %}
            <li>
                <a href="{{ course.url }}">{{ course.title }}</a>
                ({{ course.course_number }}) - {{ course.term }}
            </li>
            {% endfor %}
        </ul>
    </div>
</div>
