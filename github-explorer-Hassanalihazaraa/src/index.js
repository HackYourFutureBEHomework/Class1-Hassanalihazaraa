'use strict';

{
  function fetchJSON(url, cb) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'json';
         xhr.onload = () => {
        if (xhr.status < 400) {
          resolve(xhr.response);
        } else {
          reject(xhr.response);
        }
      };
    xhr.onerror = () => cb(new Error('Network request failed'));
    xhr.send();
  }

  function createAndAppend(name, parent, options = {}) {
    const elem = document.createElement(name);
    parent.appendChild(elem);
    Object.keys(options).forEach((key) => {
      const value = options[key];
      if (key === 'html') {
        elem.innerHTML = value;
      } else {
        elem.setAttribute(key, value);
      }
    });
    return elem;
  }

  function main(url) {
     const root = document.getElementById("root");
    fetchJSON(url)
      .then(data => {
        const header = createAndAppend("header", root, {class: "header"});
        const headerName = createAndAppend("div", header, {class: "headerName", html: "HYF Repositories"});
        
        const select = createAndAppend("select", headerName, {class: "select", html: "Select the Repositories"});
        data.forEach(repo => {
          createAndAppend("option", select, {class: "option", html: repo.name });
          });
        const mainContainer = createAndAppend("div", root, {class: "mainContainer" });
        const left = createAndAppend("div", mainContainer, {class: "contributorsDetails" });
        const right = createAndAppend("div", mainContainer, {class: "contributors" });

        selectButton.addEventListener("change", () => {
          const repo = data.find(r => r.name === select.value);
          left.innerHTML = "";
          right.innerHTML = "";
          renderRepo(left, repo);
          renderContributors(right, repo); });
      })
      .catch(err => {
        const root = document.getElementById("root");

        createAndAppend("div", root, {html: err.message, class: "errorAlert" });
      });
  }

  function renderRepo(parent, repo) {
    const details = createAndAppend("div", parent, {class: "details"});
    const name = createAndAppend("h4", details, {html: "Repository: "});
    createAndAppend("a", name, {class: "name-url", html: `${repo.name}`, href: repo.html_url});
    if(repo.description !== null){
        const description  = createAndAppend("h4", details, {html: "Description: "});
        createAndAppend("p", description, {html: `${repo.description }`});
    }
    const forks = createAndAppend("h4", details, {html: "Forks: "});
    createAndAppend("p", forks, {html: ` ${repo.forks_count}`});
    const updated = createAndAppend("h4", details, {html: "Updated: "});
    createAndAppend("p", updated, {html: `${repo.updated_on}`});


  function renderContributors(parent, repo) {
    const url = repo.contributors_url;
    fetchJSON(url)
      .then(contributors => {
        const $contributorsList = createAndAppend("ul", parent, {class: "contributorlist", html: "Contributions" });
        contributors.forEach(contributor => {
          const $contributorData = createAndAppend("li", $contributorsList, {class: "contributorData" });
          createAndAppend("img", $contributorData, {class: "contributorImage", src: contributor.avatar_url });
          createAndAppend("a", $contributorData, {html: `${contributor.login}`, class: "contributorsLink", href: contributor.html_url, target: "_blank" });
          createAndAppend("h4", $contributorData, {class: "contribution", html: contributor.contributions });
        });
      })
      .catch(err => {
        createAndAppend("div", parent, {html: err.message, class: "errorAlert" });
      });
  }
  
  const HYF_REPOS_URL = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

  window.onload = () => main(HYF_REPOS_URL);
}
