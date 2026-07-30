---
layout: page
title: Data Science
permalink: /teaching/Data Science/
parent: Learning
hide_title: true
description: ""
nav: false

---

<h2 class="page-header" style="text-align: center; color: blue;"><strong style="color: #cc33cc;">Data Science</strong></h2>

Here you will find all courses related to **Data Science**.

<!-- <ul>
  {% for course in site.teaching %}
    {% if course.category == "Data Science" %}
    <li>
      <a href="{{ course.url }}">{{ course.title }}</a>
      ({{ course.course_number }}) - {{ course.term }}
    </li>
    {% endif %}
  {% endfor %}
</ul> -->

<!-- <ul>
  {% assign sorted_courses = site.teaching | sort: "order" %}
  {% for course in sorted_courses %}
    {% if course.category == "Data Science" %}
      <li>
        <a href="{{ course.url }}">{{ course.title }}</a>
        ({{ course.course_number }}) - {{ course.term }}
      </li>
    {% endif %}
  {% endfor %}
</ul> -->

<!-- for bold course title -->

<ul>
  {% assign sorted_courses = site.teaching | sort: "order" %}
  {% for course in sorted_courses %}
    {% if course.category == "Data Science" %}
      <li>
        <a href="{{ course.url }}"><b>{{ course.title }}</b></a>
        ({{ course.course_number }}) - {{ course.term }}
      </li>
    {% endif %}
  {% endfor %}
</ul>

<!-- for heading course title -->

<!-- <ul>
  {% assign sorted_courses = site.teaching | sort: "order" %}
  {% for course in sorted_courses %}
    {% if course.category == "Data Science" %}
      <li>
        <a href="{{ course.url }}">
          <h6 style="display:inline; margin:0; color: #cc33cc;"><b>{{ course.title }}</b></h6>
        </a>
        ({{ course.course_number }}) - {{ course.term }}
      </li>
    {% endif %}
  {% endfor %}
</ul> -->

