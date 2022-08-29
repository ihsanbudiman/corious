import Layout from "../../layouts/app";
import Body from "../../layouts/body";
import { useState, useRef, useEffect } from "preact/hooks";

// import { useRef, useState } from "preact";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import CodeTool from "@editorjs/code";
import ImageTool from "@editorjs/image";
import SimpleImage from "@editorjs/simple-image";
import HeaderWriteStory from "../../layouts/header/header-write-story";

const DEFAULT_INITIAL_DATA = () => {
  return {
    time: new Date().getTime(),
    blocks: [
      {
        type: "header",
        data: {
          text: "Let's Write an Awesome Story!",
          level: 1,
        },
      },
    ],
  };
};

const EDITTOR_HOLDER_ID = "editorjs";

const WriteStory = () => {
  const ejInstance = useRef();
  const [editorData, setEditorData] = useState(DEFAULT_INITIAL_DATA);

  // This will run only once
  useEffect(() => {
    if (!ejInstance.current) {
      initEditor();
    }
    return () => {
      ejInstance.current.destroy();
      ejInstance.current = null;
    };
  }, []);

  const initEditor = () => {
    const editor = new EditorJS({
      holder: EDITTOR_HOLDER_ID,
      logLevel: "ERROR",
      data: editorData,
      onReady: () => {
        ejInstance.current = editor;
      },
      placeholder: "Let's write an awesome story!",
      onChange: async (data) => {
        let content = await data.saver.save();
        console.log(content);
        setEditorData(content);
      },
      autofocus: true,
      tools: {
        header: {
          class: Header,
        },
        code: CodeTool,
        image: {
          class: ImageTool,
        },
      },
    });
  };

  return (
    <>
      <Layout>
        <HeaderWriteStory />
        <div className="p-2">
          <div id={EDITTOR_HOLDER_ID}></div>
        </div>
      </Layout>
    </>
  );
};

export default WriteStory;
