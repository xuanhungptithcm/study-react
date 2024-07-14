js closure

useEffect(() => {
console.log("useEffect without dependency");
});

useEffect(() => {
console.log("useEffect with empty dependency");
}, []);

useEffect(() => {
console.log("useEffect with countS dependency");
}
, [countS]);


Mounted: Chạy khi lần đầu render component đó hoặc sau mỗi lần setState