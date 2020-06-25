// On Mount and every render
useEffect(() => {
  dosomething();
});

// Only on Mount
useEffect(() => {
  dosomething();
}, []);

// On Mount/every time [count] change
useEffect(() => {
  dosomething();
}, [count]);

// UseEffect with cleanup
useEffect(() => {
  dosomething();
  return () => {
    // cleanup
  }
});
