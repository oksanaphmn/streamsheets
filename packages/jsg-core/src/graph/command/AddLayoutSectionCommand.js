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
const AbstractItemCommand = require('./AbstractItemCommand');
const LayoutSection = require('../model/LayoutSection');

class AddLayoutSectionCommand extends AbstractItemCommand {
	static createFromObject(data = {}, { graph }) {
		let cmd;
		const item = graph.getItemById(data.itemId);
		if (item) {
			cmd = new AddLayoutSectionCommand(item, data.size, data.row, data.index).initWithObject(data);
		}
		return cmd;
	}

	constructor(item, size, row, index) {
		super(item);

		this._size = size;
		this._index = index;
		this._row = row;
	}

	execute() {
		let section;
		if (this._size !== undefined) {
			section = new LayoutSection(this._size);
		}
		if (this._row) {
			this.getItem().addRow(section);
		} else {
			this.getItem().addColumn(section);
		}
	}

	undo() {}

	redo() {
		this.execute();
	}

	toObject() {
		const data = super.toObject();

		data.size = this._size;
		data.index = this._index;
		data.row = this._row;

		return data;
	}
}

module.exports = AddLayoutSectionCommand;
