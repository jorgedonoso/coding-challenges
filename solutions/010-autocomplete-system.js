/**
 * Implement an autocomplete system. That is, given a query string s
 * and a set of all possible query strings, return all strings in the
 * set that have s as a prefix. For example, given the query string
 * de and the set of strings [dog, deer, deal], return [deer, deal].
 */

/**
 * Part 1: Build tree.
 */
function _CreateNode() {
  return {
    children: {},
  };
}

// Scan word and create a new node at each character.
function _AddWord(root, word) {
  let node = root;

  for (const char of word) {
    if (!node.children[char]) {
      node.children[char] = _CreateNode();
    }

    node = node.children[char];
  }
}

// Add all words in initial dictionary.
export function BuildLookupTree(words) {
  const root = _CreateNode();

  for (const word of words) {
    _AddWord(root, word);
  }

  return root;
}

/**
 * Part 2: Search tree.
 */
export function Autocomplete(prefix, lookupTree) {
  const res = [];
  const node = FindNextPrefixNode(lookupTree, prefix);

  if (node) {
    GetWords(node, prefix, res);
  }

  return res;
}

// Find next node. Ex: "ABC" + next-node.
function FindNextPrefixNode(root, prefix) {
  let node = root;

  for (const char of prefix) {
    if (!node.children[char]) return;

    // Save next existing seq.
    node = node.children[char];
  }

  return node;
}

function GetWords(node, prefix, res) {
  // No more children. Push crawled result.
  if (!Object.keys(node.children).length) {
    res.push(prefix);
  }

  // Move to the next character in seq.
  for (const char in node.children) {
    // Where we are at before we crawl again.
    const curCrawlRes = prefix + char;

    GetWords(node.children[char], curCrawlRes, res);
  }
}
