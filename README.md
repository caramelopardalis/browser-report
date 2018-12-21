# Browser Report

💪💪💪Layout library for browser based reporting.

We can't control browser's page breaking when contents overflowed. So, this library splits overflowed contents, and breaks the page on DOM tree.

## Examples

![Example1 on browser](example1/example1-on-browser.png)

```html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="../report.css">
        <style>
            #fruit-name-label {
                border: 1px solid black;
            }
        </style>
    </head>
    <body>
        <div class="br-content br-a4-portrait br-hide">
            <div class="br-field-group">
                <div class="br-field">
                    <div id="fruit-name-label" class="br-label">Name</div>
                    <div id="fruit-name-value" class="br-value">Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana BananaBanana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana BananaBanana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana BananaBanana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana BananaBanana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana BananaBanana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana BananaBanana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana BananaBanana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana BananaBanana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana BananaBanana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana BananaBanana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana BananaBanana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana BananaBanana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana BananaBanana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana BananaBanana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana BananaBanana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana BananaBanana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana BananaBanana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana BananaBanana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana BananaBanana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana BananaBanana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana BananaBanana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana BananaBanana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana BananaBanana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana BananaBanana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana BananaBanana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana BananaBanana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana BananaBanana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana BananaBanana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana BananaBanana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana BananaBanana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana BananaBanana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana BananaBanana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana BananaBanana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana BananaBanana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana BananaBanana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana BananaBanana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana BananaBanana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana BananaBanana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana BananaBanana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana</div>
                </div>
            </div>
        </div>
        <script src="../report.js"></script>
    </body>
</html>
```

![Example2 on browser](example2/example2-on-browser.png)

```html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="../browser.report.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.2/gh-fork-ribbon.min.css">
        <style>
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
            <div class="br-group">
                <div class="br-grid">
                    <div class="br-grid-header fruit-name">Name</div>
                    <div class="br-grid-header fruit-price">Price</div>
                    <div class="br-grid-header fruit-comment">Comment</div>
                </div>
                <div class="br-group br-grid">
                    <div class="br-grid-data fruit-name">Banana</div>
                    <div class="br-grid-data fruit-price">3 $</div>
                    <div class="br-grid-data fruit-comment">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere </div>
                </div>
                <div class="br-group br-grid">
                    <div class="br-grid-data fruit-name">Orange</div>
                    <div class="br-grid-data fruit-price">5 $</div>
                    <div class="br-grid-data fruit-comment">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard’s job is to vex chumps quickly in fog. Watch "Jeopardy!", Alex Trebek's fun TV quiz game. Woven silk pyjamas exchanged for blue quartz. Brawny gods just flocked up to quiz and vex him. Adjusting quiver and bow, Zompyc[1] killed the fox. My faxed joke won a pager in the cable TV quiz show. Amazingly few discotheques provide jukeboxes. My girl wove six dozen plaid jackets before she quit. Six big devils from Japan quickly forgot how to waltz. Big July earthquakes confound zany experimental vow. Foxy parsons quiz and cajole the lovably dim wiki-girl. Have a pick: twenty six letters - no forcing a jumbled quiz! Crazy Fredericka bought many very exquisite opal jewels. Sixty zippers were quickly picked from the woven jute bag. A quick </div>
                </div>
                <div class="br-group br-grid">
                    <div class="br-grid-data fruit-name">Grape</div>
                    <div class="br-grid-data fruit-price">12 $</div>
                    <div class="br-grid-data fruit-comment">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then </div>
                </div>
                <div class="br-group br-grid">
                    <div class="br-grid-data fruit-name">Apple</div>
                    <div class="br-grid-data fruit-price">6 $</div>
                    <div class="br-grid-data fruit-comment">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops </div>
                </div>
            </div>
        </div>
        <a class="github-fork-ribbon left-top" data-ribbon="Virtual Print Preview" title="Virtual Print Preview">Virtual Print Preview</a> 
        <script src="../browser.report.js"></script>
    </body>
</html>
```