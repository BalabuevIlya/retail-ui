const renderStory = require("./utils").renderStory;

var prefix = '-flat';

gemini.suite("CurrencyInput", () => {
  gemini.suite("Sample", suite => {
    suite
      .before(renderStory("CurrencyInput", "Sample"))
      .setCaptureElements("#test-element")
      .ignoreElements("button")
      .capture("Plain")
      .capture("Focus", (actions, find) => {
        actions.focus(find('[class^="Input' + prefix + '-input"]'));
      })
      .capture("Input value", (actions, find) => {
        "1234".split("").forEach(char => {
          actions.wait(500);
          actions.sendKeys(find('[class^="Input' + prefix + '-input"]'), char);
        });
      })
      .capture("External focus and input", (actions, find) => {
        actions.click(find("button"));
        "5678".split("").forEach(char => {
          actions.wait(500);
          actions.sendKeys(find('[class^="Input' + prefix + '-input"]'), char);
        });
      });
  });
});
