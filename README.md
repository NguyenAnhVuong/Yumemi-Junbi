<br />
<div align="center">
  <a href="https://www.yumemi.co.jp/">
    <img src="https://www.yumemi.co.jp/images/logo_yumemi_01.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Yumemi-Junbi</h3>

  <p align="center">
    Yumemi's code test project
    <br />
    <a href="https://yumemi-junbi.vercel.app">View Demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#environment-setup">Environment Setup</a></li>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

The project's purpose is to help users see the population change of the provinces in 10-year cycle. From there, users can make decisions related to economic as well as social issues.

### Built With

- [![Next][next.js]][next-url]
- [![React][react.js]][react-url]

<!-- GETTING STARTED -->

## Getting Started

### Environment Setup

Click [here](https://opendata.resas-portal.go.jp/form.html) to register RESAS Account and get RESAS API Key<br />
Create .env.local file in root folder and add RESAS API Key

```sh
RESAS_API_KEY= your RESAS API Key
```

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/NguyenAnhVuong/Yumemi-Junbi
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Build

   ```sh
   npm run build
   ```

4. Start
   ```sh
   npm run start
   ```

<!-- USAGE EXAMPLES -->

## Usage

<div style="display: flex; align-items: center; flex-direction: column; margin-top: 40px">
  <img src="https://user-images.githubusercontent.com/72128304/187025353-394dc38d-db3f-4236-ab28-44b1f5e860a6.png" alt="provinces">

<span style="display: inline-block; margin-top: 20px; font-size: 16px;">Select the provinces in which you want to see a graph of population change for that province.</span>

<img src="https://user-images.githubusercontent.com/72128304/187025373-2a8d3c51-52e5-488e-9782-72cf3c16b8b4.png" alt="Population graph" style="margin-top: 40px">

<span style="display: inline-block; margin-top: 20px; font-size: 16px;">Population graph</span>

</div>

## Contact

Nguyễn Anh Vương - [Facebook](https://www.facebook.com/vuong2k1)

Email: navuong2001@gmail.com

Github: [https://github.com/NguyenAnhVuong](https://github.com/NguyenAnhVuong)

<!-- MARKDOWN LINKS & IMAGES -->

[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
