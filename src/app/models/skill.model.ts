interface ISkill {
  name: string;
  years: number;
}

export class Skill {
  name: string;
  years: number;
  constructor(skill: ISkill) {
    this.name = skill.name;
    this.years = skill.years;
  }
}
