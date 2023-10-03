const btnExternal = document.querySelector('#btn_external');

btnExternal.onclick = () => {
  console.log('External script is trying to fetch data from http://localhost:2000');
  fetch("http://localhost:2000")
    .then(req => req.text())
    .then(data => console.log('Fetched data:', data))
    .catch(() => console.log('Fetch error'));
};

const iframe1 = document.querySelector('#iframe_1');
const iframe2 = document.querySelector('#iframe_2');
const iframe4 = document.querySelector('#iframe_4');
const input4 = document.querySelector('#inpt_src_4');

const btnReload1 = document.querySelector('#btn_reload_1');
const btnRemove1 = document.querySelector('#btn_remove_1');
const btnSet1 = document.querySelector('#btn_set_1');
const btnScripts1 = document.querySelector('#btn_scripts_1');
const btnOrigin1 = document.querySelector('#btn_origin_1');

const btnReload2 = document.querySelector('#btn_reload_2');
const btnRemove2 = document.querySelector('#btn_remove_2');
const btnSet2 = document.querySelector('#btn_set_2');
const btnScripts2 = document.querySelector('#btn_scripts_2');
const btnOrigin2 = document.querySelector('#btn_origin_2');

const btnLoad4 = document.querySelector('#btn_load_4');
const btnRemove4 = document.querySelector('#btn_remove_4');
const btnSet4 = document.querySelector('#btn_set_4');
const btnScripts4 = document.querySelector('#btn_scripts_4');
const btnOrigin4 = document.querySelector('#btn_origin_4');

addHandler(iframe1, btnReload1, handleReload);
addHandler(iframe1, btnRemove1, handleRemoveSandboxing);
addHandler(iframe1, btnSet1, handleSetSandboxing);
addHandler(iframe1, btnScripts1, handleAllowScripts);
addHandler(iframe1, btnOrigin1, handleAllowSameOrigin);

addHandler(iframe2, btnReload2, handleReload);
addHandler(iframe2, btnRemove2, handleRemoveSandboxing);
addHandler(iframe2, btnSet2, handleSetSandboxing);
addHandler(iframe2, btnScripts2, handleAllowScripts);
addHandler(iframe2, btnOrigin2, handleAllowSameOrigin);

addHandler(iframe4, btnLoad4, handleLoadIframe4);
addHandler(iframe4, btnRemove4, handleRemoveSandboxing);
addHandler(iframe4, btnSet4, handleSetSandboxing);
addHandler(iframe4, btnScripts4, handleAllowScripts);
addHandler(iframe4, btnOrigin4, handleAllowSameOrigin);

function addHandler(iframe, button, handler) {
  if (button) {
    button.onclick = () => handler(iframe);
  }
}

function handleLoadIframe4(iframe) {
  console.log(`[${iframe.id}] Load iframe`);
  iframe.src = input4.value; // load iframe4
}

function handleReload(iframe) {
  console.log(`[${iframe.id}] Reload iframe`);
  iframe.src += ''; // reload iframe
}

function handleRemoveSandboxing(iframe) {
  console.log(`[${iframe.id}] Remove attribute: sandbox`);
  iframe.removeAttribute('sandbox'); //remove the sandbox attribute
}

function handleSetSandboxing(iframe) {
  console.log(`[${iframe.id}] Set attribute: sandbox`);
  iframe.setAttribute('sandbox', ''); //set the sandbox attribute
}

function handleAllowScripts(iframe) {
  toggleAttributeValue(iframe, 'sandbox', 'allow-scripts');
}

function handleAllowSameOrigin(iframe) {
  toggleAttributeValue(iframe, 'sandbox', 'allow-same-origin');
}

function toggleAttributeValue(element, attribute, attributeValue) {
  if (!element) {
    return;
  }

  const attributeValues = (element.getAttribute(attribute) || '').split(' ');

  if (attributeValues.includes(attributeValue)) {
    console.log(`[${element.id}] ${attributeValue}: Off`);
    element.setAttribute(
      attribute,
      attributeValues.filter(value => value !== attributeValue).join(' ')
    );
  } else {
  console.log(`[${element.id}] ${attributeValue}: On`);
  attributeValues.push(attributeValue);
  element.setAttribute(
      attribute,
      attributeValues.join(' ').trim(),
    );
  }
}
