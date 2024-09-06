// Question 1

function isAnagram(str1, str2) {
    // Remove any non-alphabetic characters and convert to lowercase for uniform comparison
    const cleanString = str => str.replace(/[^a-zA-Z]/g, '').toLowerCase();
    
    // Clean both strings
    str1 = cleanString(str1);
    str2 = cleanString(str2);
    
    // If lengths are different, they cannot be anagrams
    if (str1.length !== str2.length) {
        return false;
    }
    
    // Create a frequency map for the characters in str1
    const frequencyMap = {};
    
    for (const char of str1) {
        frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }
    
    // Compare the frequency map with the characters in str2
    for (const char of str2) {
        if (!frequencyMap[char]) {
            return false;
        }
        frequencyMap[char] -= 1;
        if (frequencyMap[char] < 0) {
            return false;
        }
    }
    return true;
}

