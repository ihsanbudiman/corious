import Layout from "../../layouts/app";
import Body from "../../layouts/body";
import { useState, useRef, useEffect } from "preact/hooks";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// import { useRef, useState } from "preact";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import CodeTool from "@editorjs/code";
import ImageTool from "@editorjs/image";
import SimpleImage from "@editorjs/simple-image";
import LinkTool from "@editorjs/link";
import HeaderWriteStory from "../../layouts/header/header-write-story";
import Delimiter from "@editorjs/delimiter";
import Embed from "@editorjs/embed";
import List from "@editorjs/list";
import Parser from "editorjs-viewer";
import edjsHTML from "editorjs-html";
import PublishButton from "../../components/publish-button";
import { Container } from "react-bootstrap";
import CreatableSelect from "react-select/creatable";
import { ActionMeta, OnChangeValue } from "react-select";
import { route } from "preact-router";

const DEFAULT_INITIAL_DATA = () => {
  return {};
};

const EDITTOR_HOLDER_ID = "editorjs";

const WriteStory = () => {
  const ejInstance = useRef();
  const [editorData, setEditorData] = useState({});
  const [show, setShow] = useState(false);
  const [disabled, setDisabled] = useState(true);

  // This will run only once
  useEffect(() => {
    if (!ejInstance.current) {
      initEditor();
    }

    return async () => {
      if (ejInstance.current && ejInstance.current.destroy) {
        ejInstance.current.destroy();
        ejInstance.current = null;
      }
    };
  }, []);

  useEffect(() => {
    disableHandler();
  }, [editorData]);

  const disableHandler = () => {
    if (JSON.stringify(editorData) == `{}`) {
      setDisabled(true);
      return;
    }

    if (editorData && editorData.blocks && editorData.blocks.length == 0) {
      setDisabled(true);
      return;
    }

    if (!editorData || !editorData.blocks) {
      setDisabled(true);
      return;
    }

    setDisabled(false);
    return;
  };

  const deleteBlockHandler = async (blockID) => {
    console.log("deleted", blockID);
  };

  const dataEditorHandler = (data) => {
    setEditorData(data);
  };

  const initEditor = async () => {
    const editor = await new EditorJS({
      holder: EDITTOR_HOLDER_ID,
      logLevel: "ERROR",
      data: editorData,
      placeholder: "Let's write an awesome story!",
      onChange: async (data) => {
        let content = await data.saver.save();
        const blockData = data.blocks.getBlockByIndex(data.blocks.getCurrentBlockIndex());
        if (blockData.isEmpty) {
          if (editorData && editorData.blocks && editorData.blocks.length > 0) {
            console.log("masuk");

            for (let i = 0; i < editorData.blocks.length; i++) {
              const block = editorData.blocks[i];
              if (blockData == block.id) {
                deleteBlockHandler(blockData.id);
                break;
              }
            }
          }
        } else {
          // inserOrUpdateBlock(blockData);
        }
        dataEditorHandler(content);
      },
      onReady: () => {
        ejInstance.current = editor;
      },
      autofocus: true,
      tools: {
        header: {
          class: Header,
        },
        code: {
          class: CodeTool,
        },
        delimiter: Delimiter,
        embed: Embed,
        list: {
          class: List,
          inlineToolbar: true,
          removed: () => {
            console.log(1);
          },
          config: {
            defaultStyle: "unordered",
            removed() {
              console.log(123);
            },
          },
        },
        image: {
          class: ImageTool,
          config: {
            uploader: {
              /**
               * Upload file to the server and return an uploaded image data
               * @param {File} file - file selected from the device or pasted by drag-n-drop
               * @return {Promise.<{success, file: {url}}>}
               */
              async uploadByFile(file) {
                console.log(file);
                return new Promise((resolve, reject) => {
                  setTimeout(() => {
                    resolve({
                      success: 1,
                      file: {
                        url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                      },
                    });
                  }, 1000);
                });
              },

              /**
               * Send URL-string to the server. Backend should load image by this URL and return an uploaded image data
               * @param {string} url - pasted image URL
               * @return {Promise.<{success, file: {url}}>}
               */
              async uploadByUrl(url) {
                console.log(url);
                return {
                  success: 1,
                  file: {
                    url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                    // any other image data you want to store, such as width, height, color, extension, etc
                  },
                };
              },
            },
          },
        },
      },
    });

    // ejInstance.current = editor;
  };

  async function handleShow() {
    setShow(true);
  }

  const handleChange = (newValue, actionMeta) => {
    console.group("Value Changed");
    console.log(newValue);
    console.log(`action: ${actionMeta}`);
    console.groupEnd();
  };

  return (
    <>
      <Layout>
        <HeaderWriteStory
          button={
            <PublishButton disabled={disabled} onClick={() => handleShow()} style={{ marginRight: `0.75rem` }}>
              Publish
            </PublishButton>
          }
        />

        <div className="p-2">
          <div id={EDITTOR_HOLDER_ID}></div>
        </div>

        <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
          <Container>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body className="h-100">
              <div className="row">
                <div className="col-12 col-lg-6">adsf</div>
                <div className="col-12 col-lg-6">
                  <div className="">
                    <span className="d-block">Pick Topic</span>
                    <CreatableSelect isMulti onChange={handleChange} onInputChange={(e) => {}}></CreatableSelect>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Container>
        </Modal>
      </Layout>
    </>
  );
};

export default WriteStory;
