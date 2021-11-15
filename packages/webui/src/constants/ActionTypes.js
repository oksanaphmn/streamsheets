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
export const SET_APP_STATE = 'SET_APP_STATE';

export const STREAM_CONTROL_EVENT = 'STREAM_CONTROL_EVENT';
export const STREAM_CONTROL_CLEAN = 'STREAM_CONTROL_CLEAN';

export const LICENSE_INFORMATION = 'LICENSE_INFORMATION';
export const LICENSE_CLEAR_ERROR = 'LICENSE_CLEAR_ERROR';

export const FETCH_STREAMS = 'FETCH_STREAMS';
export const RECEIVE_STREAMS = 'RECEIVE_STREAMS';
export const FETCH_MACHINES = 'FETCH_MACHINES';
export const RECEIVE_MACHINES = 'RECEIVE_MACHINES';
export const FETCH_META_INFORMATION = 'FETCH_META_INFORMATION';
export const RECEIVE_META_INFORMATION = 'RECEIVE_META_INFORMATION';
export const RECEIVE_USER_JOINED = 'RECEIVE_USER_JOINED';
export const RECEIVE_USER_LEFT = 'RECEIVE_USER_LEFT';
export const CONNECT = 'connect';
export const DISCONNECT = 'disconnect';
export const SERVICE_CONNECTED = 'service_connected';
export const SERVICE_DISCONNECTED = 'service_disconnected';
export const SETUP_COMPLETED = 'setup_completed';
export const SETUP_LOCALE = 'setup_locale';

export const HIDE_IMPORT_DIALOG = 'HIDE_IMPORT_DIALOG';
export const SHOW_START_IMPORT = 'SHOW_START_IMPORT';
export const SHOW_IMPORT = 'SHOW_IMPORT';
export const SEND_EXPORT_ERROR = 'SEND_EXPORT_ERROR';

export const EXPORT_SELECT_MACHINES = 'EXPORT_SELECT_MACHINES';
export const EXPORT_DESELECT_MACHINES = 'EXPORT_DESELECT_MACHINES';
export const EXPORT_TOGGLE_MACHINE = 'EXPORT_TOGGLE_MACHINE';
export const EXPORT_RESET = 'EXPORT_RESET';

// testing purpose:
export const SEND_MACHINE_LOAD = 'SEND_MACHINE_LOAD';
export const RECEIVE_MACHINE_LOAD = 'RECEIVE_MACHINE_LOAD';
// ~

export const SAVE_PROCESS_SETTINGS = 'SAVE_PROCESS_SETTINGS';
export const RECEIVE_SAVE_PROCESS_SETTINGS = 'RECEIVE_SAVE_PROCESS_SETTINGS';

export const FETCH_MACHINE_CREATE = 'FETCH_MACHINE_CREATE';
export const RECEIVE_MACHINE_CREATE = 'RECEIVE_MACHINE_CREATE';

export const SEND_MACHINE_SAVE = 'SEND_MACHINE_SAVE';
export const RECEIVE_MACHINE_SAVE = 'RECEIVE_MACHINE_SAVE';

export const SEND_MACHINE_SAVE_AS = 'SEND_MACHINE_SAVE_AS';
export const RECEIVE_MACHINE_SAVE_AS = 'RECEIVE_MACHINE_SAVE_AS';

export const SEND_MACHINE_CLONE = 'SEND_MACHINE_CLONE';
export const RECEIVE_MACHINE_CLONE = 'RECEIVE_MACHINE_CLONE';

export const PUT_MACHINE_SETTINGS = 'PUT_MACHINE_SETTINGS';
export const RECEIVE_PUT_MACHINE_SETTINGS = 'RECEIVE_PUT_MACHINE_SETTINGS';

export const SEND_MACHINE_STREAM_EXPORT = 'SEND_MACHINE_STREAM_EXPORT';
export const RECEIVE_MACHINE_STREAM_EXPORT = 'RECEIVE_MACHINE_STREAM_EXPORT';
export const SEND_MACHINE_STREAM_IMPORT = 'SEND_MACHINE_STREAM_IMPORT';
export const RECEIVE_MACHINE_STREAM_IMPORT = 'RECEIVE_MACHINE_STREAM_IMPORT';
export const SET_MACHINE_IMPORT = 'SET_MACHINE_IMPORT';
export const SET_MACHINE = 'SET_MACHINE';

export const SEND_RENAME_MACHINE = 'SEND_RENAME_MACHINE';
export const RECEIVE_RENAME_MACHINE = 'RECEIVE_RENAME_MACHINE';
export const SEND_START_MACHINE = 'SEND_START_MACHINE';
export const RECEIVE_START_MACHINE = 'RECEIVE_START_MACHINE';
export const SEND_STOP_MACHINE = 'SEND_STOP_MACHINE';
export const RECEIVE_STOP_MACHINE = 'RECEIVE_STOP_MACHINE';
export const SEND_PAUSE_MACHINE = 'SEND_PAUSE_MACHINE';
export const RECEIVE_PAUSE_MACHINE = 'RECEIVE_PAUSE_MACHINE';
export const SEND_STEP_MACHINE = 'SEND_STEP_MACHINE';
export const RECEIVE_STEP_MACHINE = 'RECEIVE_STEP_MACHINE';
export const SEND_REDO = 'SEND_REDO';
export const RECEIVE_REDO = 'RECEIVE_REDO';
export const SEND_UNDO = 'SEND_UNDO';
export const RECEIVE_UNDO = 'RECEIVE_UNDO';
export const SEND_DELETE_MACHINE = 'SEND_DELETE_MACHINE';
export const RECEIVE_DELETE_MACHINE = 'RECEIVE_DELETE_MACHINE';
export const SEND_CREATE_STREAMSHEET = 'SEND_CREATE_STREAMSHEET';
export const RECEIVE_CREATE_STREAMSHEET = 'RECEIVE_CREATE_STREAMSHEET';
export const SEND_DELETE_STREAMSHEET = 'SEND_DELETE_STREAMSHEET';
export const RECEIVE_DELETE_STREAMSHEET = 'RECEIVE_DELETE_STREAMSHEET';

export const RECEIVE_MACHINE_STATE_CHANGE = 'RECEIVE_MACHINE_STATE_CHANGE';
export const RECEIVE_STREAMSHEET_STEP = 'RECEIVE_STREAMSHEET_STEP';
export const RECEIVE_MACHINE_STEP = 'RECEIVE_MACHINE_STEP';
export const SEND_CYCLE_TIME = 'SEND_CYCLE_TIME';
export const RECEIVE_CYCLE_TIME = 'RECEIVE_CYCLE_TIME';
export const RECEIVE_VIEW_SETTINGS_FROM_MACHINE = 'RECEIVE_VIEW_SETTINGS_FROM_MACHINE';
export const SEND_MACHINE_LOCALE = 'SEND_MACHINE_LOCALE';
export const RECEIVE_MACHINE_LOCALE = 'RECEIVE_MACHINE_LOCALE';
export const SEND_MACHINE_UPDATE_SETTINGS = 'SEND_MACHINE_UPDATE_SETTINGS';
export const RECEIVE_MACHINE_UPDATE_SETTINGS = 'RECEIVE_MACHINE_UPDATE_SETTINGS';

export const INIT_RECONNECT = 'INIT_RECONNECT';
export const DECREMENT_RECONNECT_TIMER = 'DECREMENT_RECONNECT_TIMER';

// Admin constants
export const TODO = 'TODO';
export const ERROR = 'ERROR';
export const USERS_FETCH = 'USERS_FETCH';
export const USERS_FETCHED = 'USERS_FETCHED';
export const USERS_SAVE = 'USERS_SAVE';
export const USERS_SAVED = 'USERS_SAVED';
export const USERS_REMOVE = 'USERS_REMOVE';
export const USERS_REMOVED = 'USERS_REMOVED';

// User profile
export const USER_FETCH = 'USER_FETCH';
export const USER_FETCHED = 'USER_FETCHED';
export const USER_SET_SCOPE = 'USER_SET_SCOPE';
export const USER_SETTINGS_SAVE = 'USER_SETTINGS_SAVE';
export const USER_SETTINGS_SAVED = 'USER_SETTINGS_SAVED';

export const USER_SETTING_SET = 'USER_SETTINGS_SET';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_PENDING = 'USER_LOGIN_PENDING';
export const USER_LOGIN_RESPONSE = 'USER_LOGIN_RESPONSE';
export const USER_LOGOUT = 'USER_LOGOUT';

export const PERMISSIONS_SET = 'PERMISSIONS_SET';

export const FORM_INPUT_FEEDBACK = 'form_input_feedback';
export const NOTIFICATIONS_CLEAR = 'notifications_clear';

// Backup & Restore

export const SEND_RESTORE_SUCCESS = 'SEND_RESTORE_SUCCESS';
export const SEND_RESTORE_ERROR = 'SEND_RESTORE_ERROR';
