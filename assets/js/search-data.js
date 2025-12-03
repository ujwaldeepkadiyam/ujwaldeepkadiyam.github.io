// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications_ujwal/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-people",
          title: "people",
          description: "members of the lab or group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "teaching-data-science",
          title: 'Data Science',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/Data%20Science/";
            },},{id: "teaching-project-q-amp-a",
          title: 'Project Q&amp;amp;A',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/Data%20Science/DSProjects/QA_for_banking_give_me_some_credit/";
            },},{id: "teaching-data-science-projects",
          title: 'Data-Science-Projects',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/Data%20Science/Data-Science-Projects/";
            },},{id: "teaching-python-for-data-wrangling",
          title: 'Python-for-Data-Wrangling',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/Data%20Science/Python-for-Data-Wrangling/";
            },},{id: "teaching-basic-navigation-and-programming",
          title: 'Basic Navigation And Programming',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/Data%20Science/Python-for-Data-Wrangling/quick_reference/lec_1/";
            },},{id: "teaching-data-querying-and-manipulation",
          title: 'Data Querying and Manipulation',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/Data%20Science/Python-for-Data-Wrangling/quick_reference/lec_2/";
            },},{id: "teaching-joining-relationship-and-data-modeling",
          title: 'Joining, Relationship And Data Modeling',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/Data%20Science/Python-for-Data-Wrangling/quick_reference/lec_3/";
            },},{id: "teaching-data-transformation",
          title: 'Data Transformation',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/Data%20Science/Python-for-Data-Wrangling/quick_reference/lec_4/";
            },},{id: "teaching-computation-and-visualization",
          title: 'Computation and Visualization',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/Data%20Science/Python-for-Data-Wrangling/quick_reference/lec_5/";
            },},{id: "teaching-programming-and-automation",
          title: 'Programming And Automation',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/Data%20Science/Python-for-Data-Wrangling/quick_reference/lec_6/";
            },},{id: "teaching-unit-1-introduction-and-regression",
          title: 'Unit-1 Introduction and Regression',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/Foundations-of-Computing/Foundations-of-Machine-Learning/ML-Unit-1/";
            },},{id: "teaching-unit-1-introduction-and-regression",
          title: 'Unit-1 Introduction and Regression',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/Foundations-of-Computing/Foundations-of-Machine-Learning/ML-Unit-1/";
            },},{id: "teaching-unit-1-introduction-and-regression",
          title: 'Unit-1 Introduction and Regression',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/Foundations-of-Computing/Foundations-of-Machine-Learning/ML-Unit-1/";
            },},{id: "teaching-unit-2-margin-based-svm-and-instance-based-knn-learning",
          title: 'Unit-2 Margin-Based (SVM) and Instance-Based (KNN) Learning',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/Foundations-of-Computing/Foundations-of-Machine-Learning/ML-Unit-2/";
            },},{id: "teaching-unit-3-evaluation-hypotheses",
          title: 'Unit-3 Evaluation Hypotheses',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/Foundations-of-Computing/Foundations-of-Machine-Learning/ML-Unit-3/";
            },},{id: "teaching-foundations-of-machine-learning",
          title: 'Foundations of Machine Learning',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/Foundations%20of%20Computing/Foundations-of-Machine-Learning/";
            },},{id: "teaching-foundations-of-computing",
          title: 'Foundations of Computing',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/Foundations-of-Computing/";
            },},{id: "teaching-mathematical-foundations",
          title: 'Mathematical Foundations',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/Mathematical%20Foundations/";
            },},{id: "teaching-mathematics-for-computer-science",
          title: 'Mathematics For Computer Science',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/Mathematical%20Foundations/MFCS-Introduction/";
            },},{id: "teaching-unit-1-mathematical-logic-and-predicate-calculus",
          title: 'Unit-1 Mathematical Logic and Predicate Calculus',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/Mathematical%20Foundations/Mathematics-for-computer-science/MFCS-UNIT-1/";
            },},{id: "teaching-unit-2a-set-theory-and-relations",
          title: 'Unit-2A Set Theory And Relations',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/Mathematical%20Foundations/Mathematics-for-computer-science/MFCS-UNIT-2A/";
            },},{id: "teaching-unit-2b-algebraic-structures",
          title: 'Unit-2B Algebraic Structures',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/Mathematical%20Foundations/Mathematics-for-computer-science/MFCS-UNIT-2b/";
            },},{id: "teaching-foundations-of-statistics",
          title: 'Foundations Of Statistics',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/Mathematical%20Foundations/statistics/";
            },},{id: "teaching-assignment-session-1-questions-site",
          title: 'Assignment Session 1   questions_site',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/Data%20Science/Python-for-Data-Wrangling/Assignments/Assignment-Session-1%20-%20Questions_Site/";
            },},{id: "teaching-assignment-session-2-questions",
          title: 'Assignment Session 2   questions',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/Data%20Science/Python-for-Data-Wrangling/Assignments/Assignment-Session-2%20-%20Questions/";
            },},{id: "teaching-assignment-session-4-questions",
          title: 'Assignment Session 4   questions',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/Data%20Science/Python-for-Data-Wrangling/Assignments/Assignment-Session-4%20-%20Questions/";
            },},{id: "teaching-assignment-session-5-questions",
          title: 'Assignment Session 5 Questions',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/Data%20Science/Python-for-Data-Wrangling/Assignments/Assignment-Session-5-Questions/";
            },},{id: "teaching-assignment-session-6-questions",
          title: 'Assignment Session 6 Questions',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/Data%20Science/Python-for-Data-Wrangling/Assignments/Assignment-Session-6-Questions/";
            },},{id: "teaching-assignment-session-1-questions",
          title: 'Assignment Session_1_questions',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/Data%20Science/Python-for-Data-Wrangling/Slides/Assignment-Session_1_Questions/";
            },},{id: "teaching-assignment-session-2-questions",
          title: 'Assignment Session_2_questions',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/Data%20Science/Python-for-Data-Wrangling/Slides/Assignment-Session_2_Questions/";
            },},{id: "teaching-assignment-session-3-questions",
          title: 'Assignment Session_3_questions',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/Data%20Science/Python-for-Data-Wrangling/Slides/Assignment-Session_3_Questions/";
            },},{id: "teaching-assignment-session-4-questions",
          title: 'Assignment Session_4_questions',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/Data%20Science/Python-for-Data-Wrangling/Slides/Assignment-Session_4_Questions/";
            },},{id: "teaching-assignment-session-5-questions",
          title: 'Assignment Session_5_questions',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/Data%20Science/Python-for-Data-Wrangling/Slides/Assignment-Session_5_Questions/";
            },},{id: "teaching-assignment-session-6-questions",
          title: 'Assignment Session_6_questions',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/Data%20Science/Python-for-Data-Wrangling/Slides/Assignment-Session_6_Questions/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%75%6A%77%61%6C%64%65%65%70@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
