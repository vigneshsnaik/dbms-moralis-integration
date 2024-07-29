# DBMS Moralis Integration

This repository contains the code for integrating Moralis with a DBMS project. The integration facilitates blockchain interactions and data management using Moralis and Supabase.

## Project Overview

The integration of Moralis and Supabase in this project aims to provide a comprehensive solution for managing blockchain data. Moralis offers a powerful SDK to interact with blockchain networks, while Supabase provides a scalable backend for database management. Together, they enable efficient and secure handling of blockchain transactions, user authentication, and data storage.

## Repository Structure

The repository has the following structure:

```
dbms-moralis-integration-main/
├── .gitattributes
├── .vscode/
│   └── settings.json
├── moralisintegration.code-workspace
├── stream example.json
├── supabase/
│   ├── config.toml
│   ├── seed.sql
│   └── functions/
│       ├── .vscode/
│       │   ├── extensions.json
│       │   └── settings.json
│       └── moralis/
│           └── index.ts
```

### Key Files and Directories

- `.vscode/`: Contains configuration files for the Visual Studio Code workspace.
- `moralisintegration.code-workspace`: The workspace configuration file.
- `stream example.json`: An example JSON file for streaming data.
- `supabase/`: Directory containing Supabase configuration and seed files.
  - `config.toml`: Configuration file for Supabase.
  - `seed.sql`: SQL file to seed the Supabase database.
  - `functions/`: Directory for Supabase functions.
    - `moralis/`: Contains the Moralis integration function.
      - `index.ts`: The main TypeScript file for the Moralis function.

## Getting Started

### Prerequisites

To work with this repository, you will need the following tools installed on your system:

- [Node.js](https://nodejs.org/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Supabase CLI](https://supabase.com/docs/guides/cli)
- [Moralis SDK](https://moralis.io/)

[Frontend Repo](https://github.com/Arshad-3/dbms-miniproject-frontend)<br>
[Solidity Contract](https://github.com/Arshad-3/dbms-web3-contract)
