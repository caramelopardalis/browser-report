# browser-report

Page breaking library for browser based reporting (HTML + CSS).

We can't control browser's page breaking when contents overflowed. So this library splits overflowed contents and breaks the page on DOM tree.

[Demo page](https://caramelopardalis.github.io/browser-report).

## Examples

### Example 1

[Demo](example1/example1.html)

#### Screenshot

![Example1 on browser](example1/example1-on-browser.png)

```html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="../browser-report.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.2/gh-fork-ribbon.min.css">
        <style>
            h1 {
                padding-left: 2mm;
            }

            .br-grid-header {
                padding: .5em;
                text-align: center;
                font-weight: bold;
            }
            .br-grid-data {
                padding: .5em;
                padding-bottom: 1em;
            }

            .countries .br-grid-data {
                padding-bottom: .5em;
            }
            .country-name {
                flex-grow: 1;
            }
            .national-capital-name {
                min-width: 300px;
            }

            .fruit-name {
                min-width: 300px;
            }
            .fruit-price {
                min-width: 100px;
            }
            .fruit-comment {
                flex-grow: 1;
            }

            .github-fork-ribbon:before {
                background-color: #cce5df;
            }
            @media print {
                .github-fork-ribbon {
                    display: none;
                }
            }
        </style>
    </head>
    <body class="br-a4-portrait">
        <div class="br-content">
            <h1>Countries</h1>
            <div class="br-group countries">
                <div class="br-grid br-bordered">
                    <div class="br-grid-header country-name">Country</div>
                    <div class="br-grid-header national-capital-name">National Capital</div>
                </div>
                <div class="br-group br-grid br-bordered">
                    <div class="br-grid-data country-name">Nigeria</div>
                    <div class="br-grid-data national-capital-name">Abuja</div>
                </div>
                <div class="br-group br-grid br-bordered">
                    <div class="br-grid-data country-name">Ghana</div>
                    <div class="br-grid-data national-capital-name">Accra</div>
                </div>
                <div class="br-group br-grid br-bordered">
                    <div class="br-grid-data country-name">Algeria</div>
                    <div class="br-grid-data national-capital-name">Algiers</div>
                </div>
                <div class="br-group br-grid br-bordered">
                    <div class="br-grid-data country-name">Mali</div>
                    <div class="br-grid-data national-capital-name">Bamako</div>
                </div>
                <div class="br-group br-grid br-bordered">
                    <div class="br-grid-data country-name">Central African Republic</div>
                    <div class="br-grid-data national-capital-name">Bangui</div>
                </div>
                <div class="br-group br-grid br-bordered">
                    <div class="br-grid-data country-name">Gambia</div>
                    <div class="br-grid-data national-capital-name">Banjul</div>
                </div>
                <div class="br-group br-grid br-bordered">
                    <div class="br-grid-data country-name">Guinea-Bissau</div>
                    <div class="br-grid-data national-capital-name">Bissau</div>
                </div>
                <div class="br-group br-grid br-bordered">
                    <div class="br-grid-data country-name">Republic of the Congo</div>
                    <div class="br-grid-data national-capital-name">Brazzaville</div>
                </div>
            </div>
            <h1>Fruits</h1>
            <div class="br-group fruits">
                <div class="br-grid br-bordered">
                    <div class="br-grid-header fruit-name">Name</div>
                    <div class="br-grid-header fruit-price">Price</div>
                    <div class="br-grid-header fruit-comment">Comment</div>
                </div>
                <div class="br-group br-grid br-bordered">
                    <div class="br-grid-data fruit-name">Banana</div>
                    <div class="br-grid-data fruit-price">3 $</div>
                    <div class="br-grid-data fruit-comment">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere </div>
                </div>
                <div class="br-group br-grid br-bordered">
                    <div class="br-grid-data fruit-name">Orange</div>
                    <div class="br-grid-data fruit-price">5 $</div>
                    <div class="br-grid-data fruit-comment">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                </div>
                <div class="br-group br-grid br-bordered">
                    <div class="br-grid-data fruit-name">Grape</div>
                    <div class="br-grid-data fruit-price">12 $</div>
                    <div class="br-grid-data fruit-comment">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then </div>
                </div>
                <div class="br-group br-grid br-bordered">
                    <div class="br-grid-data fruit-name">Apple</div>
                    <div class="br-grid-data fruit-price">6 $</div>
                    <div class="br-grid-data fruit-comment">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                </div>
            </div>
        </div>
        <a class="github-fork-ribbon left-top" data-ribbon="Print Emulating" title="Print Emulating">Print Emulating</a> 
        <script src="../browser-report.js"></script>
    </body>
</html>
```

### Example 2

[Demo](example2/example2.html)

#### Screenshot

![Example2 on browser](example2/example2-on-browser.png)

```html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="../browser-report.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.2/gh-fork-ribbon.min.css">
        <style>
            h1 {
                padding-top: 10mm;
                padding-bottom: 10mm;
                text-align: center;
            }

            .br-grid-header {
                padding: .5em;
                text-align: right;
                font-weight: bold;
            }
            .br-grid-data {
                padding: .5em;
                padding-right: 2em;
                padding-bottom: 1em;
            }

            .fruit-name.br-grid-header {
                min-width: 200px;
                max-width: 200px;
            }
            .fruit-name {
                flex-grow: 1;
            }
            .fruit-price.br-grid-header {
                min-width: 200px;
                max-width: 200px;
            }
            .fruit-price {
                flex-grow: 1;
            }
            .fruit-comment.br-grid-header {
                min-width: 200px;
                max-width: 200px;
            }
            .fruit-comment {
                flex-grow: 1;
            }
            .edit-date {
                min-width: 100px;
                max-width: 100px;
            }

            .github-fork-ribbon:before {
                background-color: #cce5df;
            }
            @media print {
                .github-fork-ribbon {
                    display: none;
                }
            }
        </style>
    </head>
    <body class="br-a4-portrait">
        <div class="br-content">
            <h1>Banana Report</h1>
            <div class="br-group fruits">
                <div class="br-group br-grid">
                    <div class="br-grid-header fruit-name">Name</div>
                    <div class="br-grid-data fruit-name">Banana</div>
                    <div class="br-grid-data edit-date">2018-12-22</div>
                </div>
                <div class="br-group br-grid">
                    <div class="br-grid-header fruit-price">Price</div>
                    <div class="br-grid-data fruit-price">3 $</div>
                    <div class="br-grid-data edit-date">2018-12-24</div>
                </div>
                <div class="br-group br-grid">
                    <div class="br-grid-header fruit-comment">Comment</div>
                    <div class="br-grid-data fruit-comment">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere </div>
                    <div class="br-grid-data edit-date">2018-12-25</div>
                </div>
            </div>
        </div>
        <a class="github-fork-ribbon left-top" data-ribbon="Print Emulating" title="Print Emulating">Print Emulating</a> 
        <script src="../browser-report.js"></script>
    </body>
</html>
```

### Example 3

[Demo](example3/example3.html)

#### Screenshot

![Example3 on browser](example3/example3-on-browser.png)

```html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="../browser-report.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.2/gh-fork-ribbon.min.css">
        <style>
            h1 {
                padding-top: 10mm;
                padding-bottom: 10mm;
                text-align: center;
            }
            .br-page-footer {
                padding-top: 10mm;
                padding-right: 10mm;
                padding-bottom: 10mm;
                text-align: right;
            }
            .page-numbers {
                text-align: right;
            }

            .br-grid-header {
                padding: .5em;
                min-width: 200px;
                max-width: 200px;
                text-align: right;
                font-weight: bold;
            }
            .br-grid-data {
                flex-grow: 1;
                padding: .5em;
                padding-right: 2em;
                padding-bottom: 1em;
            }

            .github-fork-ribbon:before {
                background-color: #cce5df;
            }
            @media print {
                .github-fork-ribbon {
                    display: none;
                }
            }
        </style>
    </head>
    <body class="br-a4-portrait">
        <div class="br-indicator-container">
            <div class="br-indicator"></div>
        </div>
        <div class="br-content">
            <div class="br-page-margin-top">
                ：8]：8]：8]：8]：8]：8]
            </div>
            <div class="br-page-header">
                <h1>Gorilla Report</h1>
            </div>
            <div class="br-group">
                <div class="br-group br-grid">
                    <div class="br-grid-header">Name</div>
                    <div class="br-grid-data">Western Lowland Gorilla</div>
                </div>
                <div class="br-group br-grid">
                    <div class="br-grid-header">Trinomial name</div>
                    <div class="br-grid-data">Gorilla gorilla gorilla</div>
                </div>
                <div class="br-group br-grid">
                    <div class="br-grid-header">Description</div>
                    <div class="br-grid-data">The western lowland gorilla is the smallest subspecies of gorilla but nevertheless still a primate of exceptional size and strength. This species of gorillas exhibits pronounced sexual dimorphism. They possess no tails and have jet black skin along with coarse black hair that covers their entire body except for the face, ears, hands and feet. The hair on the back and rump of males takes on a grey coloration and is also lost as they get progressively older. This coloration is the reason why older males are known as "silverbacks". Their hands are proportionately large with nails on all digits, similar to that of a human's, and very large thumbs. They have short muzzles, a prominent brow ridge, large nostrils and small eyes and ears. Other features are large muscles in the jaw region along with broad and strong teeth. Among these teeth are strong sets of frontal canines and large molars in the back of the mouth for grinding fruits[3] and vegetables.[4] A male standing erect can be up to 1.8 m (5 ft 11 in) tall and weigh up to 270 kg (600 lb).[5] Males have an average weight of 140 kg (310 lb), females of 90 kg (200 lb).[6] Males in captivity, however, are noted to be capable of reaching weights up to 275 kg (606 lb).[4] Males stand upright at 163 cm (64 in), females at 1.5 m (4 ft 11 in).[5] According to the late John Aspinall a silverback gorilla in his prime has the physical strength of seven or eight Olympic weightlifters, but this claim is unverified. Western gorillas frequently stand upright, but walk in a hunched, quadrupedal fashion, with hands curled and knuckles touching the ground. This style of movement requires long arms, which works for western gorillas because the arm span of gorillas is larger than their standing height. <h5>Albinism</h5> The only known albino gorilla – named Snowflake – was a wild-born western lowland gorilla originally from Equatorial Guinea. Snowflake, a male gorilla, was taken from the wild and brought to the Barcelona Zoo in 1966 at a very young age. Snowflake presented the typical traits and characteristics of albinism typically seen in humans, including white hair, pinkish skin, light colored eyes, reduced visual perception and photophobia (discomfort in bright light). Snowflake was diagnosed by scientists as having non-syndromic albinism. The genetic variant for Snowflake’s albinism was identified by the scientists as a non-synonymous single nucleotide polymorphism located in a transmembrane region of SLC45A2. This transporter is also known to be involved in oculocutaneous albinism type 4 in humans. This information revealed the first evidence of inbreeding in western lowland gorillas.[7]</div>
                </div>
            </div>
            <div class="br-page-footer">
                <q>https://en.wikipedia.org/wiki/Western_lowland_gorilla</q><br>
            </div>
            <div class="br-page-margin-bottom">
                <div class="page-numbers">
                    <span class="br-page-number"></span> / <span class="br-total-number"></span>
                </div>
            </div>
        </div>
        <a class="github-fork-ribbon left-top" data-ribbon="Print Emulating" title="Print Emulating">Print Emulating</a> 
        <script src="../browser-report.js"></script>
    </body>
</html>
```

## Licenses

* Thanks to loading.io (https://loading.io/spinner/ellipsis)