<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:atom="http://www.w3.org/2005/Atom">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title><xsl:value-of select="/rss/channel/title"/> RSS Feed</title>
        <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
            line-height: 1.5;
            color: #333;
            max-width: 900px;
            margin: 0 auto;
            padding: 2rem 1rem;
            background-color: #f9f9f9;
          }
          h1 {
            font-size: 2.5rem;
            margin: 1.5rem 0 0.5rem;
          }
          h2 {
            font-size: 1.8rem;
            color: #2c3e50;
            margin: 1.5rem 0 0.5rem;
          }
          .description {
            font-size: 1.2rem;
            color: #666;
            margin-bottom: 2rem;
          }
          .header {
            padding-bottom: 1rem;
            border-bottom: 1px solid #eee;
            margin-bottom: 2rem;
          }
          .post {
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid #eee;
          }
          .post-title {
            font-size: 1.5rem;
            margin-bottom: 0.3rem;
          }
          .post-title a {
            color: #3273dc;
            text-decoration: none;
          }
          .post-title a:hover {
            text-decoration: underline;
          }
          .post-meta {
            font-size: 0.9rem;
            color: #777;
          }
          .post-description {
            margin-top: 1rem;
          }
          .subscribe {
            margin-top: 2rem;
            font-size: 1rem;
          }
          .subscribe a {
            color: #3273dc;
          }
          @media (prefers-color-scheme: dark) {
            body {
              background-color: #222;
              color: #eee;
            }
            h2 {
              color: #8abff7;
            }
            .description {
              color: #bbb;
            }
            .header, .post {
              border-bottom-color: #444;
            }
            .post-title a {
              color: #70a9f1;
            }
            .post-meta {
              color: #999;
            }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1><xsl:value-of select="/rss/channel/title"/></h1>
          <div class="description"><xsl:value-of select="/rss/channel/description"/></div>
          <div class="subscribe">
            <p>
              Subscribe to this RSS feed: 
              <a>
                <xsl:attribute name="href">
                  <xsl:value-of select="/rss/channel/link"/>rss.xml
                </xsl:attribute>
                <xsl:value-of select="/rss/channel/link"/>rss.xml
              </a>
            </p>
          </div>
        </div>
        <div class="posts">
          <xsl:for-each select="/rss/channel/item">
            <div class="post">
              <h2 class="post-title">
                <a>
                  <xsl:attribute name="href">
                    <xsl:value-of select="link"/>
                  </xsl:attribute>
                  <xsl:value-of select="title"/>
                </a>
              </h2>
              <div class="post-meta">
                Published: <xsl:value-of select="pubDate"/>
              </div>
              <div class="post-description">
                <xsl:value-of select="description"/>
              </div>
            </div>
          </xsl:for-each>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>