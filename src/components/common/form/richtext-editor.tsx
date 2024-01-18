import cntl from "cntl";
import {
  BtnBold,
  BtnItalic,
  ContentEditableEvent,
  Editor,
  EditorProvider,
  Toolbar,
  BtnBulletList
} from "react-simple-wysiwyg";

const classes = {
  inputContainer: cntl`
      flex flex-col w-[100%] my-3
    `,
  labelClass: cntl`
      text-sm font-semibold text-[#07142b] mb-[5px] capitialise
    `
};

interface IRichTextEditorProps {
  label?: string;
  value: string;
  name?: string;
  onChange: (e: ContentEditableEvent) => void;
}

export const RichTextEditor = ({
  label,
  value,
  name,
  onChange
}: IRichTextEditorProps) => {
  return (
    <div className={classes.inputContainer}>
      {label ? <span className={classes.labelClass}>{label}</span> : null}

      <EditorProvider>
        <Editor value={value} onChange={onChange} name={name}>
          <Toolbar>
            <BtnBold />
            <BtnItalic />
            <BtnBulletList />
          </Toolbar>
        </Editor>
      </EditorProvider>
    </div>
  );
};
