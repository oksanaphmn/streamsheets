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
import { default as JSG } from '@cedalo/jsg-core';
import { default as Parser } from '@cedalo/parser';

import ClientEvent from './src/ui/events/ClientEvent';
import MouseEvent from './src/ui/events/MouseEvent';
import GestureEvent from './src/ui/events/GestureEvent';
import DragEvent from './src/ui/events/DragEvent';
import KeyEvent from './src/ui/events/KeyEvent';
import Cursor from './src/ui/Cursor';
import DocumentEventDispatcher from './src/ui/graphics/DocumentEventDispatcher';
import Graphics from './src/ui/graphics/Graphics';
import ScalableGraphics from './src/ui/graphics/ScalableGraphics';
import GraphicSystem from './src/ui/graphics/GraphicSystem';
import View from './src/ui/View';
import ModelController from './src/graph/controller/ModelController';
import GraphItemController from './src/graph/controller/GraphItemController';
import GraphController from './src/graph/controller/GraphController';
import NodeController from './src/graph/controller/NodeController';
import ConnectionController from './src/graph/controller/ConnectionController';
import PortController from './src/graph/controller/PortController';
import GroupController from './src/graph/controller/GroupController';
import RootController from './src/graph/controller/RootController';
import GraphControllerFactory from './src/graph/controller/GraphControllerFactory';
import Feedback from './src/graph/feedback/Feedback';
import PortFeedback from './src/graph/feedback/PortFeedback';
import EdgeFeedback from './src/graph/feedback/EdgeFeedback';
import OrthoEdgeFeedback from './src/graph/feedback/OrthoEdgeFeedback';
import FeedbackView from './src/graph/feedback/FeedbackView';
import MoveFeedbackView from './src/graph/feedback/MoveFeedbackView';
import Tooltip from './src/graph/interaction/Tooltip';
import InteractionUtils from './src/graph/interaction/InteractionUtils';
import Interaction from './src/graph/interaction/Interaction';
import InteractionActivator from './src/graph/interaction/InteractionActivator';
import InteractionDispatcher from './src/graph/interaction/InteractionDispatcher';
import InteractionHandler from './src/graph/interaction/InteractionHandler';
import './src/graph/interaction/SelectionVerifier';
import ActionHandle from './src/graph/interaction/ActionHandle';
import Highlighter from './src/graph/interaction/Highlighter';
import SnapHelper from './src/graph/interaction/SnapHelper';
import MoveAlignHelper from './src/graph/interaction/MoveAlignHelper';
import GraphInteraction from './src/graph/interaction/GraphInteraction';
import ReadOnlyInteraction from './src/graph/interaction/ReadOnlyInteraction';
import Delegate from './src/graph/interaction/Delegate';
import AbstractInteraction from './src/graph/interaction/AbstractInteraction';
import DragDropInteraction from './src/graph/interaction/DragDropInteraction';
import DropDelegate from './src/graph/interaction/DropDelegate';
import CreateItemInteraction from './src/graph/interaction/CreateItemInteraction';
import CreateNodeInteraction from './src/graph/interaction/CreateNodeInteraction';
import CreateEdgeInteraction from './src/graph/interaction/CreateEdgeInteraction';
import CreateOrthoEdgeInteraction from './src/graph/interaction/CreateOrthoEdgeInteraction';
import CreatePolyLineInteraction from './src/graph/interaction/CreatePolyLineInteraction';
import CreateBezierInteraction from './src/graph/interaction/CreateBezierInteraction';
import CreateBezierEdgeInteraction from './src/graph/interaction/CreateBezierEdgeInteraction';
import EditShapeInteraction from './src/graph/interaction/EditShapeInteraction';
import EditLineShapeInteraction from './src/graph/interaction/EditLineShapeInteraction';
import EditBezierShapeInteraction from './src/graph/interaction/EditBezierShapeInteraction';
import ImageDropActivator from './src/graph/interaction/ImageDropActivator';
import MarqueeInteraction from './src/graph/interaction/MarqueeInteraction';
import MoveInteraction from './src/graph/interaction/MoveInteraction';
import MoveDelegate from './src/graph/interaction/MoveDelegate';
import RotateInteraction from './src/graph/interaction/RotateInteraction';
import ReshapeInteraction from './src/graph/interaction/ReshapeInteraction';
import ResizeInteraction from './src/graph/interaction/ResizeInteraction';
import ResizeEdgeInteraction from './src/graph/interaction/ResizeEdgeInteraction';
import ResizeLineNodeInteraction from './src/graph/interaction/ResizeLineNodeInteraction';
import ResizeOrthoEdgeInteraction from './src/graph/interaction/ResizeOrthoEdgeInteraction';
import ResizeBezierEdgeInteraction from './src/graph/interaction/ResizeBezierEdgeInteraction';
import ResizeEditEdgeInteraction from './src/graph/interaction/ResizeEditEdgeInteraction';
import ResizeEditOrthoEdgeInteraction from './src/graph/interaction/ResizeEditOrthoEdgeInteraction';
import EditTextInteraction from './src/graph/interaction/EditTextInteraction';
import PinchInteraction from './src/graph/interaction/PinchInteraction';
import PinchActivator from './src/graph/interaction/PinchActivator';
import PanInteraction from './src/graph/interaction/PanInteraction';
import PanActivator from './src/graph/interaction/PanActivator';
import ZoomInteraction from './src/graph/interaction/ZoomInteraction';
import DefaultKeyHandler from './src/graph/interaction/DefaultKeyHandler';
import FormatPainterInteraction from './src/graph/interaction/FormatPainterInteraction';
import CreateEdgeActivator from './src/graph/interaction/CreateEdgeActivator';
import ResizeActivator from './src/graph/interaction/ResizeActivator';
import ReshapeActivator from './src/graph/interaction/ReshapeActivator';
import RotateActivator from './src/graph/interaction/RotateActivator';
import MoveActivator from './src/graph/interaction/MoveActivator';
import MarqueeActivator from './src/graph/interaction/MarqueeActivator';
import EditTextActivator from './src/graph/interaction/EditTextActivator';
import DragDropActivator from './src/graph/interaction/DragDropActivator';
import LinkActivator from './src/graph/interaction/LinkActivator';
import TooltipActivator from './src/graph/interaction/TooltipActivator';
import GraphItemView from './src/graph/view/GraphItemView';
import EdgeView from './src/graph/view/EdgeView';
import NodeView from './src/graph/view/NodeView';
import GraphView from './src/graph/view/GraphView';
import TextView from './src/graph/view/TextView';
import GroupView from './src/graph/view/GroupView';
import SelectionFeedbackView from './src/graph/view/SelectionFeedbackView';
import PositionFeedbackView from './src/graph/view/PositionFeedbackView';
import MarqueeFeedbackView from './src/graph/view/MarqueeFeedbackView';
import SnapFeedbackView from './src/graph/view/SnapFeedbackView';
import LayerId from './src/graph/view/LayerId';
import SelectionHandle from './src/graph/view/selection/SelectionHandle';
import SelectionStyle from './src/graph/view/selection/SelectionStyle';
import SelectionView from './src/graph/view/selection/SelectionView';
import Styles from './src/graph/view/selection/Styles';
import Marker from './src/graph/view/selection/Marker';
import RotationMarker from './src/graph/view/selection/RotationMarker';
import SelectionHandler from './src/graph/view/selection/SelectionHandler';
import BBoxSelectionHandler from './src/graph/view/selection/BBoxSelectionHandler';
import NodeSelectionHandler from './src/graph/view/selection/NodeSelectionHandler';
import LineNodeSelectionHandler from './src/graph/view/selection/LineNodeSelectionHandler';
import TextSelectionHandler from './src/graph/view/selection/TextSelectionHandler';
import LineSelectionHandler from './src/graph/view/selection/LineSelectionHandler';
import OrthoLineSelectionHandler from './src/graph/view/selection/OrthoLineSelectionHandler';
import GroupSelectionHandler from './src/graph/view/selection/GroupSelectionHandler';
import SelectionHandlerFactory from './src/graph/view/selection/SelectionHandlerFactory';
import SelectionProvider from './src/graph/view/SelectionProvider';
import PortView from './src/graph/view/PortView';
import EditShapeView from './src/graph/view/EditShapeView';
import ShapeMarker from './src/graph/view/ShapeMarker';
import EditLineShapeView from './src/graph/view/EditLineShapeView';
import EditBezierShapeView from './src/graph/view/EditBezierShapeView';
import BBoxView from './src/graph/view/BBoxView';
import { FloatingToolbar } from './src/graph/view/FloatingToolbar';
import DefaultShapeRenderer from './src/graph/view/shapes/DefaultShapeRenderer';
import BezierShapeRenderer from './src/graph/view/shapes/BezierShapeRenderer';
import EllipseShapeRenderer from './src/graph/view/shapes/EllipseShapeRenderer';
import LineShapeRenderer from './src/graph/view/shapes/LineShapeRenderer';
import BezierLineShapeRenderer from './src/graph/view/shapes/BezierLineShapeRenderer';
import PolygonShapeRenderer from './src/graph/view/shapes/PolygonShapeRenderer';
import RectangleShapeRenderer from './src/graph/view/shapes/RectangleShapeRenderer';
import PathShapeRenderer from './src/graph/view/shapes/PathShapeRenderer';
import ShapeRenderer from './src/graph/view/shapes/ShapeRenderer';
import ControllerViewer from './src/ui/viewer/ControllerViewer';
import GraphViewer from './src/ui/viewer/GraphViewer';
import ScrollableViewer from './src/ui/viewer/ScrollableViewer';
import GraphEditor from './src/ui/GraphEditor';
import Widget from './src/ui/Widget';
import Scale from './src/ui/Scale';
import ViewPanel from './src/ui/scrollview/ViewPanel';
import ViewPort from './src/ui/scrollview/ViewPort';
import Arrow from './src/ui/scrollview/Arrow';
import Range from './src/ui/scrollview/Range';
import RangeModel from './src/ui/scrollview/RangeModel';
import Thumb from './src/ui/scrollview/Thumb';
import ScrollBar from './src/ui/scrollview/ScrollBar';
import ScrollView from './src/ui/scrollview/ScrollView';
import GraphViewPanel from './src/ui/GraphViewPanel';
import ScrollPanel from './src/ui/ScrollPanel';
import ContentNodeView from './src/graph/view/ContentNodeView';
import ContentPaneView from './src/graph/view/ContentPaneView';
import ContentNodeController from './src/graph/controller/ContentNodeController';
import ItemMenuHandler from './src/ui/menu/ItemMenuHandler';
import ItemMenuProvider from './src/ui/menu/ItemMenuProvider';
import ItemMenuEntry from './src/ui/menu/ItemMenuEntry';
import MenuDelete from './src/ui/menu/entries/MenuDelete';
import DefaultMenuProvider from './src/ui/menu/DefaultMenuProvider';
import ViewInteraction from './src/graph/interaction/ViewInteraction';
import ViewActivator from './src/graph/interaction/ViewActivator';
import ResizeEditEdgeActivator from './src/graph/interaction/ResizeEditEdgeActivator';
import EditCellInteraction from './src/graph/interaction/EditCellInteraction';
import EditTreeInteraction from './src/graph/interaction/EditTreeInteraction';
import SheetActivator from './src/graph/interaction/SheetActivator';
import ButtonActivator from './src/graph/interaction/ButtonActivator';
import CaptionActivator from './src/graph/interaction/CaptionActivator';
import SheetGraphInteraction from './src/graph/interaction/SheetGraphInteraction';
import SheetInteraction from './src/graph/interaction/SheetInteraction';
import SplitterActivator from './src/graph/interaction/SplitterActivator';
import StreamSheetContainerResizeActivator from './src/graph/interaction/StreamSheetContainerResizeActivator';
import SheetGraphItemEventActivator from './src/graph/interaction/SheetGraphItemEventActivator';
import SheetPlotActivator from './src/graph/interaction/SheetPlotActivator';
import SheetGraphItemEventInteraction from './src/graph/interaction/SheetGraphItemEventInteraction';
import SheetPlotInteraction from './src/graph/interaction/SheetPlotInteraction';
import ChartSelectionFeedbackView from './src/graph/feedback/ChartSelectionFeedbackView';
import SplitterInteraction from './src/graph/interaction/SplitterInteraction';
import TreeActivator from './src/graph/interaction/TreeActivator';
import TreeInteraction from './src/graph/interaction/TreeInteraction';
import CaptionView from './src/graph/view/CaptionView';
import ButtonView from './src/graph/view/ButtonView';
import LayoutView from './src/graph/view/LayoutView';
import CellsView from './src/graph/view/CellsView';
import ColumnHeaderView from './src/graph/view/ColumnHeaderView';
import HeaderView from './src/graph/view/HeaderView';
import StreamSheetView from './src/graph/view/StreamSheetView';
import StreamSheetContainerView from './src/graph/view/StreamSheetContainerView';
import StreamSheetContainerWrapperView from './src/graph/view/StreamSheetContainerWrapperView';
import RowHeaderView from './src/graph/view/RowHeaderView';
import ScrollbarView from './src/graph/view/ScrollbarView';
import SheetHeaderView from './src/graph/view/SheetHeaderView';
import TreeItemsView from './src/graph/view/TreeItemsView';
import WorksheetView from './src/graph/view/WorksheetView';
import SheetButtonView from './src/graph/view/SheetButtonView';
import SheetCheckboxView from './src/graph/view/SheetCheckboxView';
import SheetSliderView from './src/graph/view/SheetSliderView';
import SheetKnobView from './src/graph/view/SheetKnobView';
import { init as initExtensions, SheetPlotView }  from '@cedalo/jsg-extensions/ui';
import TreeFeedbackView from './src/graph/feedback/TreeFeedbackView';
import CellFeedbackView from './src/graph/feedback/CellFeedbackView';
import CellEditor from './src/graph/view/CellEditor';

import JSGGlobals from './src/JSGGlobals';

JSG.ClientEvent = ClientEvent;
JSG.MouseEvent = MouseEvent;
JSG.KeyEvent = KeyEvent;
JSG.GestureEvent = GestureEvent;
JSG.DragEvent = DragEvent;
JSG.Cursor = Cursor;
JSG.DocumentEventDispatcher = DocumentEventDispatcher;
JSG.Graphics = Graphics;
JSG.ScalableGraphics = ScalableGraphics;
JSG.GraphicSystem = GraphicSystem;
JSG.View = View;
JSG.ModelController = ModelController;
JSG.GraphItemController = GraphItemController;
JSG.GraphController = GraphController;
JSG.NodeController = NodeController;
JSG.ConnectionController = ConnectionController;
JSG.PortController = PortController;
JSG.GroupController = GroupController;
JSG.RootController = RootController;
JSG.GraphControllerFactory = GraphControllerFactory;
JSG.Feedback = Feedback;
JSG.PortFeedback = PortFeedback;
JSG.EdgeFeedback = EdgeFeedback;
JSG.OrthoEdgeFeedback = OrthoEdgeFeedback;
JSG.FeedbackView = FeedbackView;
JSG.MoveFeedbackView = MoveFeedbackView;
JSG.Tooltip = Tooltip;
JSG.InteractionUtils = InteractionUtils;
JSG.Interaction = Interaction;
JSG.InteractionActivator = InteractionActivator;
JSG.InteractionDispatcher = InteractionDispatcher;
JSG.InteractionHandler = InteractionHandler;
JSG.ActionHandle = ActionHandle;
JSG.Highlighter = Highlighter;
JSG.SnapHelper = SnapHelper;
JSG.MoveAlignHelper = MoveAlignHelper;
JSG.GraphInteraction = GraphInteraction;
JSG.ReadOnlyInteraction = ReadOnlyInteraction;
JSG.Delegate = Delegate;
JSG.AbstractInteraction = AbstractInteraction;
JSG.DragDropInteraction = DragDropInteraction;
JSG.DropDelegate = DropDelegate;
JSG.CreateItemInteraction = CreateItemInteraction;
JSG.CreateNodeInteraction = CreateNodeInteraction;
JSG.CreateEdgeInteraction = CreateEdgeInteraction;
JSG.CreateOrthoEdgeInteraction = CreateOrthoEdgeInteraction;
JSG.CreatePolyLineInteraction = CreatePolyLineInteraction;
JSG.CreateBezierInteraction = CreateBezierInteraction;
JSG.CreateBezierEdgeInteraction = CreateBezierEdgeInteraction;
JSG.EditShapeInteraction = EditShapeInteraction;
JSG.EditLineShapeInteraction = EditLineShapeInteraction;
JSG.EditBezierShapeInteraction = EditBezierShapeInteraction;
JSG.ImageDropActivator = ImageDropActivator;
JSG.MarqueeInteraction = MarqueeInteraction;
JSG.MoveInteraction = MoveInteraction;
JSG.MoveDelegate = MoveDelegate;
JSG.RotateInteraction = RotateInteraction;
JSG.ReshapeInteraction = ReshapeInteraction;
JSG.ResizeInteraction = ResizeInteraction;
JSG.ResizeEdgeInteraction = ResizeEdgeInteraction;
JSG.ResizeLineNodeInteraction = ResizeLineNodeInteraction;
JSG.ResizeOrthoEdgeInteraction = ResizeOrthoEdgeInteraction;
JSG.ResizeBezierEdgeInteraction = ResizeBezierEdgeInteraction;
JSG.ResizeEditEdgeInteraction = ResizeEditEdgeInteraction;
JSG.ResizeEditOrthoEdgeInteraction = ResizeEditOrthoEdgeInteraction;
JSG.EditTextInteraction = EditTextInteraction;
JSG.PinchInteraction = PinchInteraction;
JSG.PinchActivator = PinchActivator;
JSG.PanInteraction = PanInteraction;
JSG.PanActivator = PanActivator;
JSG.ZoomInteraction = ZoomInteraction;
JSG.DefaultKeyHandler = DefaultKeyHandler;
JSG.FormatPainterInteraction = FormatPainterInteraction;
JSG.CreateEdgeActivator = CreateEdgeActivator;
JSG.ResizeActivator = ResizeActivator;
JSG.ReshapeActivator = ReshapeActivator;
JSG.RotateActivator = RotateActivator;
JSG.MoveActivator = MoveActivator;
JSG.MarqueeActivator = MarqueeActivator;
JSG.EditTextActivator = EditTextActivator;
JSG.DragDropActivator = DragDropActivator;
JSG.LinkActivator = LinkActivator;
JSG.TooltipActivator = TooltipActivator;
JSG.GraphItemView = GraphItemView;
JSG.EdgeView = EdgeView;
JSG.NodeView = NodeView;
JSG.GraphView = GraphView;
JSG.TextView = TextView;
JSG.GroupView = GroupView;
JSG.SelectionFeedbackView = SelectionFeedbackView;
JSG.PositionFeedbackView = PositionFeedbackView;
JSG.MarqueeFeedbackView = MarqueeFeedbackView;
JSG.SnapFeedbackView = SnapFeedbackView;
JSG.LayerId = LayerId;
JSG.SelectionHandle = SelectionHandle;
JSG.SelectionStyle = SelectionStyle;
JSG.SelectionView = SelectionView;
JSG.Styles = Styles;
JSG.Marker = Marker;
JSG.RotationMarker = RotationMarker;
JSG.SelectionHandler = SelectionHandler;
JSG.BBoxSelectionHandler = BBoxSelectionHandler;
JSG.NodeSelectionHandler = NodeSelectionHandler;
JSG.LineNodeSelectionHandler = LineNodeSelectionHandler;
JSG.TextSelectionHandler = TextSelectionHandler;
JSG.LineSelectionHandler = LineSelectionHandler;
JSG.OrthoLineSelectionHandler = OrthoLineSelectionHandler;
JSG.GroupSelectionHandler = GroupSelectionHandler;
JSG.SelectionHandlerFactory = SelectionHandlerFactory;
JSG.SelectionProvider = SelectionProvider;
JSG.PortView = PortView;
JSG.EditShapeView = EditShapeView;
JSG.ShapeMarker = ShapeMarker;
JSG.EditLineShapeView = EditLineShapeView;
JSG.EditBezierShapeView = EditBezierShapeView;
JSG.BBoxView = BBoxView;
JSG.FloatingToolbar = FloatingToolbar;
JSG.DefaultShapeRenderer = DefaultShapeRenderer;
JSG.BezierShapeRenderer = BezierShapeRenderer;
JSG.EllipseShapeRenderer = EllipseShapeRenderer;
JSG.LineShapeRenderer = LineShapeRenderer;
JSG.BezierLineShapeRenderer = BezierLineShapeRenderer;
JSG.PolygonShapeRenderer = PolygonShapeRenderer;
JSG.RectangleShapeRenderer = RectangleShapeRenderer;
JSG.PathShapeRenderer = PathShapeRenderer;
JSG.ShapeRenderer = ShapeRenderer;
JSG.ControllerViewer = ControllerViewer;
JSG.GraphViewer = GraphViewer;
JSG.ScrollableViewer = ScrollableViewer;
JSG.GraphEditor = GraphEditor;
JSG.Widget = Widget;
JSG.Scale = Scale;
JSG.ViewPanel = ViewPanel;
JSG.ViewPort = ViewPort;
JSG.Arrow = Arrow;
JSG.Range = Range;
JSG.RangeModel = RangeModel;
JSG.Thumb = Thumb;
JSG.ScrollBar = ScrollBar;
JSG.ScrollView = ScrollView;
JSG.GraphViewPanel = GraphViewPanel;
JSG.ScrollPanel = ScrollPanel;
JSG.ContentNodeView = ContentNodeView;
JSG.ContentPaneView = ContentPaneView;
JSG.ContentNodeController = ContentNodeController;
JSG.ViewInteraction = ViewInteraction;
JSG.ViewActivator = ViewActivator;
JSG.ItemMenuHandler = ItemMenuHandler;
JSG.ItemMenuProvider = ItemMenuProvider;
JSG.ItemMenuEntry = ItemMenuEntry;
JSG.MenuDelete = MenuDelete;
JSG.DefaultMenuProvider = DefaultMenuProvider;
JSG.ResizeEditEdgeActivator = ResizeEditEdgeActivator;
JSG.EditCellInteraction = EditCellInteraction;
JSG.EditTreeInteraction = EditTreeInteraction;
JSG.SheetActivator = SheetActivator;
JSG.ButtonActivator = ButtonActivator;
JSG.CaptionActivator = CaptionActivator;
JSG.SheetGraphInteraction = SheetGraphInteraction;
JSG.SheetInteraction = SheetInteraction;
JSG.SplitterActivator = SplitterActivator;
JSG.StreamSheetContainerResizeActivator = StreamSheetContainerResizeActivator;
JSG.SheetGraphItemEventActivator = SheetGraphItemEventActivator;
JSG.SheetGraphItemEventInteraction = SheetGraphItemEventInteraction;
JSG.SheetPlotActivator = SheetPlotActivator;
JSG.SheetPlotInteraction = SheetPlotInteraction;
JSG.ChartSelectionFeedbackView = ChartSelectionFeedbackView;
JSG.SplitterInteraction = SplitterInteraction;
JSG.TreeActivator = TreeActivator;
JSG.TreeInteraction = TreeInteraction;
JSG.CaptionView = CaptionView;
JSG.ButtonView = ButtonView;
JSG.LayoutView = LayoutView;
JSG.CellsView = CellsView;
JSG.ColumnHeaderView = ColumnHeaderView;
JSG.HeaderView = HeaderView;
JSG.StreamSheetView = StreamSheetView;
JSG.StreamSheetContainerView = StreamSheetContainerView;
JSG.StreamSheetContainerWrapperView = StreamSheetContainerWrapperView;
JSG.RowHeaderView = RowHeaderView;
JSG.ScrollbarView = ScrollbarView;
JSG.SheetHeaderView = SheetHeaderView;
JSG.TreeItemsView = TreeItemsView;
JSG.WorksheetView = WorksheetView;
JSG.SheetButtonView = SheetButtonView;
JSG.SheetCheckboxView = SheetCheckboxView;
JSG.SheetSliderView = SheetSliderView;
JSG.SheetKnobView = SheetKnobView;
JSG.SheetPlotView = SheetPlotView;
JSG.TreeFeedbackView = TreeFeedbackView;
JSG.CellFeedbackView = CellFeedbackView;
JSG.CellEditor = CellEditor;

JSG.Parser = Parser;

initExtensions(JSG);

export default JSG;
