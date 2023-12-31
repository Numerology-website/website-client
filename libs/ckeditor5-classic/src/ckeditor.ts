/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic"

import { Alignment } from "@ckeditor/ckeditor5-alignment"
import { Autoformat } from "@ckeditor/ckeditor5-autoformat"
import {
  Bold,
  Italic,
  Strikethrough,
  Underline,
} from "@ckeditor/ckeditor5-basic-styles"
import { BlockQuote } from "@ckeditor/ckeditor5-block-quote"
import { CloudServices } from "@ckeditor/ckeditor5-cloud-services"
import { Essentials } from "@ckeditor/ckeditor5-essentials"
import { FindAndReplace } from "@ckeditor/ckeditor5-find-and-replace"
import {
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
} from "@ckeditor/ckeditor5-font"
import { Heading } from "@ckeditor/ckeditor5-heading"
import { Highlight } from "@ckeditor/ckeditor5-highlight"
import { GeneralHtmlSupport } from "@ckeditor/ckeditor5-html-support"
import {
  AutoImage,
  Image,
  ImageCaption,
  ImageInsert,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
} from "@ckeditor/ckeditor5-image"
import { Indent } from "@ckeditor/ckeditor5-indent"
import { AutoLink, Link } from "@ckeditor/ckeditor5-link"
import { List } from "@ckeditor/ckeditor5-list"
import { MediaEmbed } from "@ckeditor/ckeditor5-media-embed"
import { PageBreak } from "@ckeditor/ckeditor5-page-break"
import { Paragraph } from "@ckeditor/ckeditor5-paragraph"
import { PasteFromOffice } from "@ckeditor/ckeditor5-paste-from-office"
import { RemoveFormat } from "@ckeditor/ckeditor5-remove-format"
import { SourceEditing } from "@ckeditor/ckeditor5-source-editing"
import {
  SpecialCharacters,
  SpecialCharactersArrows,
  SpecialCharactersCurrency,
  SpecialCharactersEssentials,
  SpecialCharactersLatin,
  SpecialCharactersText,
} from "@ckeditor/ckeditor5-special-characters"
import { Style } from "@ckeditor/ckeditor5-style"
import {
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
} from "@ckeditor/ckeditor5-table"
import {
  Base64UploadAdapter,
  SimpleUploadAdapter,
} from "@ckeditor/ckeditor5-upload"
import { WordCount } from "@ckeditor/ckeditor5-word-count"

// You can read more about extending the build with additional plugins in the "Installing plugins" guide.
// See https://ckeditor.com/docs/ckeditor5/latest/installation/plugins/installing-plugins.html for details.

class Editor extends ClassicEditor {
  public static override builtinPlugins = [
    Alignment,
    AutoImage,
    AutoLink,
    Autoformat,
    Base64UploadAdapter,
    SimpleUploadAdapter,
    BlockQuote,
    Bold,
    CloudServices,
    Essentials,
    FindAndReplace,
    FontBackgroundColor,
    FontColor,
    FontFamily,
    FontSize,
    GeneralHtmlSupport,
    Heading,
    Highlight,
    Image,
    ImageCaption,
    ImageInsert,
    ImageResize,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    Indent,
    Italic,
    Link,
    List,
    MediaEmbed,
    PageBreak,
    Paragraph,
    PasteFromOffice,
    RemoveFormat,
    SpecialCharacters,
    SpecialCharactersArrows,
    SpecialCharactersCurrency,
    SpecialCharactersEssentials,
    SpecialCharactersLatin,
    SpecialCharactersText,
    Strikethrough,
    Style,
    Table,
    TableCaption,
    TableCellProperties,
    TableColumnResize,
    TableProperties,
    TableToolbar,
    // Title,
    Underline,
    WordCount,
    SourceEditing,
  ]

  public static override defaultConfig = {
    toolbar: {
      items: [
        "sourceEditing",
        "heading",
        "fontFamily",
        "fontSize",
        "|",
        "bold",
        "italic",
        "underline",
        "|",
        "fontBackgroundColor",
        "fontColor",
        "highlight",
        "|",
        "blockQuote",
        "link",
        "bulletedList",
        "numberedList",
        "|",
        "alignment",
        "outdent",
        "indent",
        "|",
        "imageUpload",
        "imageInsert",
        "insertTable",
        "mediaEmbed",
        "undo",
        "redo",
        "|",
        "pageBreak",
        "style",
        "specialCharacters",
        "strikethrough",
      ],
    },
    language: "en",
    image: {
      toolbar: [
        "imageTextAlternative",
        "toggleImageCaption",
        "imageStyle:inline",
        "imageStyle:block",
        "imageStyle:side",
      ],
    },
    table: {
      contentToolbar: [
        "tableColumn",
        "tableRow",
        "mergeTableCells",
        "tableCellProperties",
        "tableProperties",
      ],
    },
    simpleUpload: {
      uploadUrl: "http://54.254.188.98:3000/api/upload/images",
    },
    htmlSupport: {
      allow: [
        {
          name: /.*/,
          attributes: /.*/,
          classes: /.*/,
          styles: /.*/,
        },
      ],
    },
  }
}

export default Editor
