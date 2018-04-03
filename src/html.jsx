import React from "react";

export default class HTML extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <link
            rel="preload"
            href="/static/open-sans-latin-400.cffb686d.woff2"
            as="font"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/static/montserrat-latin-400.501ce09c.woff2"
            as="font"
            crossOrigin="anonymous"
          />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          {/* <link rel="shortcut icon" href={favicon} /> */}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
