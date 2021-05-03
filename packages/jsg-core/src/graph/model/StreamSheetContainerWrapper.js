/********************************************************************************
 * Copyright (c) 2020 Cedalo AG
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 ********************************************************************************/
const JSG = require('../../JSG');
const Node = require('./Node');

module.exports = class StreamSheetContainerWrapper extends Node {
	// constructor() {
	// 	super();
	//
	// }

	newInstance() {
		return new StreamSheetContainerWrapper();
	}

	getItemType() {
		return 'streamsheetcontainerwrapper';
	}

	layout() {
		const box = JSG.boxCache.get();
		const size = this.getSize().toPoint();

		super.layout();
	}
};
