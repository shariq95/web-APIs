navigator.getBattery().then(battery => {
  console.log(`${battery.level * 100}%`);

  battery.addEventLIstener("levelchange", () => {
    console.log(`${this.level * 100}%`);
  });
});

// can be used to give feedback if the battery is low
