/**
 * @license Copyright (c) 2014-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';

import type { EditorConfig } from '@ckeditor/ckeditor5-core';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Image, ImageUploadEditing, ImageUtils } from '@ckeditor/ckeditor5-image';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { Undo } from '@ckeditor/ckeditor5-undo';

// You can read more about extending the build with additional plugins in the "Installing plugins" guide.
// See https://ckeditor.com/docs/ckeditor5/latest/installation/plugins/installing-plugins.html for details.

class Editor extends ClassicEditor {
	public static override builtinPlugins = [
		Essentials,
		Image,
		Paragraph,
		Undo
	];

	public static override defaultConfig: EditorConfig = {
		toolbar: {
			items: [
				'undo',
				'redo'
			]
		},
		language: 'en'
	};
}

class CustomImageUploadEditing extends ImageUploadEditing {

	override init() {
		super.init();

		const imageUtils = this.editor.plugins.get('ImageUtils')
		this.foo(imageUtils);
	}

	foo(foo: ImageUtils) {
		console.log(foo, foo.isInlineImage({} as any));
	}

}

export default Editor;
