$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("odooPurchasesSearch.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality verification",
  "description": "",
  "id": "search-functionality-verification",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7020874273,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "user is logged in and on purchases module",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "go to odoo, log in and go to purcases",
  "keyword": "Given "
});
formatter.match({
  "location": "OdooPurchasesSearchSteps.go_to_odoo_log_in_and_go_to_purcases()"
});
formatter.result({
  "duration": 9882177175,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "search products by name",
  "description": "",
  "id": "search-functionality-verification;search-products-by-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "user is on odoo purchases/products module",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enters a word \"apple\" into a search box",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "# And presses Enter key or clicks on search button"
    }
  ],
  "line": 10,
  "name": "system should display results that contain the word \"apple\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "a small tab with the word \"apple\" appears in the search box",
  "keyword": "And "
});
formatter.match({
  "location": "OdooPurchasesSearchSteps.user_is_on_odoo_purchases_products_module()"
});
formatter.result({
  "duration": 1656826894,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apple",
      "offset": 20
    }
  ],
  "location": "OdooPurchasesSearchSteps.user_enters_a_word_into_a_search_box(String)"
});
formatter.result({
  "duration": 1031071281,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apple",
      "offset": 53
    }
  ],
  "location": "OdooPurchasesSearchSteps.system_should_display_results_that_contain_the_word(String)"
});
formatter.result({
  "duration": 459849816,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apple",
      "offset": 27
    }
  ],
  "location": "OdooPurchasesSearchSteps.a_small_tab_with_the_word_appears_in_the_search_box(String)"
});
formatter.result({
  "duration": 37170070,
  "status": "passed"
});
formatter.after({
  "duration": 582978986,
  "status": "passed"
});
formatter.before({
  "duration": 3581790532,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "user is logged in and on purchases module",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "go to odoo, log in and go to purcases",
  "keyword": "Given "
});
formatter.match({
  "location": "OdooPurchasesSearchSteps.go_to_odoo_log_in_and_go_to_purcases()"
});
formatter.result({
  "duration": 8019787173,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "display/hide advanced search option",
  "description": "",
  "id": "search-functionality-verification;display/hide-advanced-search-option",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "user clicks on the search icon",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "advanced search options should display",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user clicks on the search icon again",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "advanced search options should disapear",
  "keyword": "Then "
});
formatter.match({
  "location": "OdooPurchasesSearchSteps.user_clicks_on_the_search_icon()"
});
formatter.result({
  "duration": 144074860,
  "status": "passed"
});
formatter.match({
  "location": "OdooPurchasesSearchSteps.advanced_search_options_should_display()"
});
formatter.result({
  "duration": 99951547,
  "status": "passed"
});
formatter.match({
  "location": "OdooPurchasesSearchSteps.user_clicks_on_the_search_icon_again()"
});
formatter.result({
  "duration": 135411851,
  "status": "passed"
});
formatter.match({
  "location": "OdooPurchasesSearchSteps.advanced_search_options_should_disapear()"
});
formatter.result({
  "duration": 35139991,
  "status": "passed"
});
formatter.after({
  "duration": 590375280,
  "status": "passed"
});
});