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
export default class Utils {
	static deepCopy(o) {
		const output = Array.isArray(o) ? [] : {};
		Object.keys(o).forEach((key) => {
			const v = o[key];
			output[key] = (typeof v === 'object') ? Utils.deepCopy(v) : v;
		});
		return output;
	}

	static formatDateString(s = '') {
		if(!Number.isNaN(Date.parse(s))) {
			const d = new Date(s);
			return `${d.toLocaleDateString()}:${d.toLocaleTimeString()}`;
		}
		return '';
	};

	static getAvailableSheetsCount(licenseInfo = {}) {
		const { maxStreamsheets = -1, usedStreamsheets = 0 } = licenseInfo;
		return maxStreamsheets < 0 ? maxStreamsheets : Math.max(0, maxStreamsheets - usedStreamsheets);
	}
	static areSheetsAvailable(licenseInfo = {}) {
		const available = Utils.getAvailableSheetsCount(licenseInfo);
		return available < 0 || available > 0;
	}

	static scopeFromLocation(location = {}) {
		const hash = location.hash || '';
		return hash.startsWith('#scope=') ? hash.substring(7) : undefined;
	};
}
