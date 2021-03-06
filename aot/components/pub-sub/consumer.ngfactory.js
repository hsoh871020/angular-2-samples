import * as import0 from '../../../components/pub-sub/consumer';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../components/pub-sub/pub-sub-service';
import * as import9 from '@angular/core/src/linker/view_container';
import * as import10 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import11 from '@angular/core/src/linker/template_ref';
import * as import12 from '@angular/common/src/directives/ng_if';
import * as import13 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import14 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import15 from '@angular/common/src/directives/ng_for';
import * as import16 from '@angular/core/src/change_detection/change_detection_util';
export class Wrapper_Consumer {
    constructor(p0) {
        this._changed = false;
        this.context = new import0.Consumer(p0);
    }
    ngOnDetach(view, componentView, el) {
    }
    ngOnDestroy() {
    }
    ngDoCheck(view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    }
    checkHost(view, componentView, el, throwOnChange) {
    }
    handleEvent(eventName, $event) {
        var result = true;
        return result;
    }
    subscribe(view, _eventHandler) {
        this._eventHandler = _eventHandler;
    }
}
var renderType_Consumer_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
class View_Consumer_Host0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_Consumer_Host0, renderType_Consumer_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'consumer', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_Consumer0(this.viewUtils, this, 0, this._el_0);
        this._Consumer_0_3 = new Wrapper_Consumer(this.injectorGet(import8.PubSubService, this.parentIndex));
        this.compView_0.create(this._Consumer_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._Consumer_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Consumer) && (0 === requestNodeIndex))) {
            return this._Consumer_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._Consumer_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const ConsumerNgFactory = new import7.ComponentFactory('consumer', View_Consumer_Host0, import0.Consumer);
const styles_Consumer = [];
var renderType_Consumer = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_Consumer, {});
export class View_Consumer0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_Consumer0, renderType_Consumer, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_0 = new import9.ViewContainer(0, null, this, this._anchor_0);
        this._TemplateRef_0_5 = new import11.TemplateRef_(this, 0, this._anchor_0);
        this._NgIf_0_6 = new import10.Wrapper_NgIf(this._vc_0.vcRef, this._TemplateRef_0_5);
        this.init(null, (this.renderer.directRenderer ? null : [this._anchor_0]), null);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import11.TemplateRef) && (0 === requestNodeIndex))) {
            return this._TemplateRef_0_5;
        }
        if (((token === import12.NgIf) && (0 === requestNodeIndex))) {
            return this._NgIf_0_6.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_0_0_0 = (this.context.processed.length > 0);
        this._NgIf_0_6.check_ngIf(currVal_0_0_0, throwOnChange, false);
        this._NgIf_0_6.ngDoCheck(this, this._anchor_0, throwOnChange);
        this._vc_0.detectChangesInNestedViews(throwOnChange);
    }
    destroyInternal() {
        this._vc_0.destroyNestedViews();
    }
    createEmbeddedViewInternal(nodeIndex) {
        if ((nodeIndex == 0)) {
            return new View_Consumer1(this.viewUtils, this, 0, this._anchor_0, this._vc_0);
        }
        return null;
    }
}
class View_Consumer1 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_Consumer1, renderType_Consumer, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'h4', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, 'Processed Customers', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'table', new import3.InlineArray2(2, 'class', 'table'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n        ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_5, 'thead', import3.EMPTY_INLINE_ARRAY, null);
        this._text_8 = this.renderer.createText(this._el_7, '\n            ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_7, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_10 = this.renderer.createText(this._el_9, '\n                ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_9, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_12 = this.renderer.createText(this._el_11, 'First Name', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_9, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_14 = this.renderer.createText(this._el_13, 'Last Name', null);
        this._text_15 = this.renderer.createText(this._el_9, '\n            ', null);
        this._text_16 = this.renderer.createText(this._el_7, '\n        ', null);
        this._text_17 = this.renderer.createText(this._el_5, '\n        ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_5, 'tbody', import3.EMPTY_INLINE_ARRAY, null);
        this._text_19 = this.renderer.createText(this._el_18, '\n            ', null);
        this._anchor_20 = this.renderer.createTemplateAnchor(this._el_18, null);
        this._vc_20 = new import9.ViewContainer(20, 18, this, this._anchor_20);
        this._TemplateRef_20_5 = new import11.TemplateRef_(this, 20, this._anchor_20);
        this._NgFor_20_6 = new import13.Wrapper_NgFor(this._vc_20.vcRef, this._TemplateRef_20_5, this.parentView.injectorGet(import14.IterableDiffers, this.parentIndex), this.parentView.ref);
        this._text_21 = this.renderer.createText(this._el_18, '\n        ', null);
        this._text_22 = this.renderer.createText(this._el_5, '\n    ', null);
        this._text_23 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_24 = import3.createRenderElement(this.renderer, this._el_0, 'button', import3.EMPTY_INLINE_ARRAY, null);
        this._text_25 = this.renderer.createText(this._el_24, 'Stop Processing', null);
        this._text_26 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_24, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_24));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._text_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._anchor_20,
            this._text_21,
            this._text_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._text_26
        ]), [disposable_0]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import11.TemplateRef) && (20 === requestNodeIndex))) {
            return this._TemplateRef_20_5;
        }
        if (((token === import15.NgFor) && (20 === requestNodeIndex))) {
            return this._NgFor_20_6.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_20_0_0 = this.parentView.context.processed;
        this._NgFor_20_6.check_ngForOf(currVal_20_0_0, throwOnChange, false);
        this._NgFor_20_6.ngDoCheck(this, this._anchor_20, throwOnChange);
        this._vc_20.detectChangesInNestedViews(throwOnChange);
    }
    destroyInternal() {
        this._vc_20.destroyNestedViews();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
    createEmbeddedViewInternal(nodeIndex) {
        if ((nodeIndex == 20)) {
            return new View_Consumer2(this.viewUtils, this, 20, this._anchor_20, this._vc_20);
        }
        return null;
    }
    handleEvent_24(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            const pd_sub_0 = (this.parentView.context.stopProcessing() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
}
class View_Consumer2 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_Consumer2, renderType_Consumer, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_8 = import16.UNINITIALIZED;
        this._expr_9 = import16.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_6 = this.renderer.createText(this._el_5, '', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n            ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7
        ]), null);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_8 = import3.inlineInterpolate(1, '', this.context.$implicit.firstName, '');
        if (import3.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setText(this._text_3, currVal_8);
            this._expr_8 = currVal_8;
        }
        const currVal_9 = import3.inlineInterpolate(1, '', this.context.$implicit.lastName, '');
        if (import3.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setText(this._text_6, currVal_9);
            this._expr_9 = currVal_9;
        }
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
