class intramsReflection {
  constructor(title, experience, realization, lesson) {
    this.title = title;
    this.experience = experience;
    this.realization = realization;
    this.lesson = lesson;
  }

  presentReflection() {
    console.log(this.title, " ");
    console.log(this.experience, " ");
    console.log(this.realization, " ");
    console.log(this.lesson, " ");
  }
}

const myReflection = new intramsReflection (
  "My Reflection on the Intramurals",
  "This year's Intramurals could be my favorite, despite not joining any event. Watching students run on the oval, seeing journalists capture the moments, and hearing students sing made me feel something I could not quite explain, but it was there in a quiet way.",
  "Instead of putting myself under the pressure of joining an event, I chose to enjoy the experience in my own way. I laughed with my friends, spent more time with them, and helped at their booths to support them. Through these simple moments, I realized that sometimes, it is okay to change something in your life and see what happens. I also appreciated the participants' efforts, teamwork, and enthusiasm.",
  "This experience reminded me that we do not always have to push ourselves to do something just because it is expected of us. Sometimes, stepping away from that pressure allows us to experience things differently and appreciate what we might have otherwise overlooked."
);

myReflection.presentReflection();
