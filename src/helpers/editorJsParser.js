const code = (data) => {
  return (
    <pre>
      <code>{data}</code>
    </pre>
  );
};

const delimiter = () => {
  return <br />;
};

const header = (t) => {
  const el = "<h" + t.level + ">" + t.text + "</h" + t.level + ">";
  return <div dangerouslySetInnerHTML={{ __html: el }}></div>;
};

var i = {
  delimiter: function () {
    return delimiter();
  },
  header: function (e) {
    var t = e.data;
    return header(t);
  },
  paragraph: function (e) {
    return <p>{e.data.text}</p>;
    // return "<p>" + e.data.text + "</p>";x
  },
  list: function (e) {
    const listHandler = (t) => {
      (r = "unordered" === t.style ? "ul" : "ol"),
        (n = function (e, t) {
          var r = e.map(function (e) {
            if (!e.content && !e.items) return "<li>" + e + "</li>";
            var r = "";
            return e.items && (r = n(e.items, t)), e.content ? "<li> " + e.content + " </li>" + r : void 0;
          });
          return "<" + t + ">" + r.join("") + "</" + t + ">";
        });
      return n(t.items, r);
    };
    var t = e.data,
      r = "unordered" === t.style ? "ul" : "ol",
      n = function (e, t) {
        var r = e.map(function (e) {
          if (!e.content && !e.items) return "<li>" + e + "</li>";
          var r = "";
          return e.items && (r = n(e.items, t)), e.content ? "<li> " + e.content + " </li>" + r : void 0;
        });
        return "<" + t + ">" + r.join("") + "</" + t + ">";
      };
    return <div dangerouslySetInnerHTML={{ __html: n(t.items, r) }}></div>;
  },

  image: function (e) {
    var t = e.data,
      r = t.caption ? t.caption : "Image";
    return (
      <div className="moduleItemIntrotext">
        <div className="moduleItemImage" dangerouslySetInnerHTML={{ __html: '<img  src="' + (t.file && t.file.url ? t.file.url : t.url) + '" alt="' + r + '" />' }}></div>
      </div>
    );
  },
  quote: function (e) {
    var t = e.data;
    return <div dangerouslySetInnerHTML={{ __html: "<blockquote>" + t.text + "</blockquote> - " + t.caption }}></div>;
  },
  code: function (e) {
    return code(e.data.code);
  },
  embed: function (e) {
    var t = e.data;
    switch (t.service) {
      case "vimeo":
        return <div dangerouslySetInnerHTML={{ __html: '<iframe src="' + t.embed + '" height="' + t.height + '" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>' }}></div>;
      case "youtube":
        return <div dangerouslySetInnerHTML={{ __html: '<iframe width="' + t.width + '" height="' + t.height + '" src="' + t.embed + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' }}></div>;
      default:
        throw new Error("Only Youtube and Vime Embeds are supported right now.");
    }
  },
};

const editorJsParser = (e) => {
  return e && e.blocks && e.blocks.length > 0
    ? e.blocks.map(function (e) {
        return i[e.type] ? i[e.type](e) : t(e.type);
      })
    : "";
};

export default editorJsParser;
