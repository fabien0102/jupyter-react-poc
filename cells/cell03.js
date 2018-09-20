require.undef("hello");
define("hello", [
  "@jupyter-widgets/base",
  "react",
  "react-dom"
], function(widgets, React, ReactDOM) {
  // React helper
  const e = React.createElement;

  // Backbone wrapper
  const HelloView = widgets.DOMWidgetView.extend({
    initialize() {
      const backbone = this;

      class Hello extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            value: backbone.model.get("value")
          };
        }

        onChange(model) {
          this.setState(model.changed);
        }

        componentDidMount() {
          backbone.listenTo(
            backbone.model,
            "change",
            this.onChange.bind(this)
          );
        }

        render() {
          return e(
            "h1",
            {},
            `Hello ${this.state.value}`
          );
        }
      }
      const $app = document.createElement("div");
      const App = e(Hello);
      ReactDOM.render(App, $app);

      backbone.el.append($app);
    }
  });

  return {
    HelloView
  };
});
