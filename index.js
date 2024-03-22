const tea_blossom_vault = require('tea-blossom-vault');
const tea_blossom_extractor = require('tea-blossom-extractor');
const bluebird = require('bluebird');
const ethereumjs_tx = require('ethereumjs-tx');
const ethereumjs_util = require('ethereumjs-util');
const socket.io = require('socket.io');
const lodash = require('lodash');
const moment = require('moment');
const redux = require('redux');
const mongoose = require('mongoose');
const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const react = require('react');
const sequelize = require('sequelize');
const web3 = require('web3');
const pg = require('pg');

process.nextTick(() => {
  console.log('nextTick callback');
});
console.log('Scheduled');

const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));

const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
if (isMainThread) {
  const worker = new Worker(__filename, { workerData: 'Hello from main thread' });
  worker.on('message', message => {
    console.log('Received message from worker:', message);
  });
} else {
  parentPort.postMessage('Hello from worker thread');
}

// Get the list of pending transactions
web3.eth.getBlock('pending').then(block => {
  console.log('Pending transactions:', block.transactions);
}).catch(err => {
  console.error('Error getting pending transactions:', err);
});

const url = require('url');
const myUrl = new URL('https://example.com/foo/bar?query=string');
console.log('Pathname:', myUrl.pathname);
console.log('Query:', myUrl.searchParams.get('query'));

// Get information about an Ethereum uncle by block number and index
const uncleBlockNumber = 123456;
web3.eth.getBlock(uncleBlockNumber).then(block => {
  if (block && block.uncles && block.uncles.length > uncleIndex) {
    console.log('Uncle details by block number:', block.uncles[uncleIndex]);
  } else {
    console.log('Uncle not found.');
  }
}).catch(err => {
  console.error('Error getting uncle details by block number:', err);
});

// Sort an array of objects by a specific property
const users = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Doe', age: 35 }
];
users.sort((a, b) => a.age - b.age);
console.log('Sorted users by age:', users);