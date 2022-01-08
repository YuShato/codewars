function arrayToTree(values, i = 0) {
    if (i >= values.length) return;
    return new TreeNode(values[i], arrayToTree(values, 2 * i + 1),
        arrayToTree(values, 2 * i + 2));
}