import css from "./button.module.scss";

export interface IButton {
  element: HTMLButtonElement;
  render: (target: HTMLElement) => void;
  disable: () => this;
  enable: () => this;
  hide: () => this;
  show: () => this;
}

interface IButtonProps {
  text: string;
  onClick: () => void;
}

/**
 * Represents a button element with customizable text and click handler.
 */
export class Button implements IButton {
  #text: string;
  #onClick: () => void;
  #element: HTMLButtonElement;

  /**
   * Creates a new Button instance.
   * @param {object} options - The configuration options for the button.
   * @param {string} options.text - The text to display on the button.
   * @param {function} options.onClick - The click event handler function.
   */
  constructor({ text, onClick }: IButtonProps) {
    this.#text = text;
    this.#onClick = onClick;
    this.#element = this.#createButtonElement();
    this.#element.classList.add(css.button);
  }

  get element() {
    return this.#element;
  }

  /**
   * Creates and returns a button element with the specified text and click event handler.
   * @returns {HTMLButtonElement} The created button element.
   */
  #createButtonElement(): HTMLButtonElement {
    const button = document.createElement("button");
    button.textContent = this.#text;
    button.addEventListener("click", this.#onClick);
    return button;
  }

  /**
   * Renders the button element to the specified target element.
   * @param {HTMLElement} target - The target element to which the button should be appended.
   */
  render(target: HTMLElement): this {
    target.append(this.#element);
    return this;
  }

  disable(): this {
    this.#element.disabled = true;
    this.#element.classList.add(css.disabled);
    return this;
  }

  enable(): this {
    this.#element.disabled = false;
    this.#element.classList.remove(css.disabled);
    return this;
  }

  hide(): this {
    this.#element.classList.add(css.hidden);
    return this;
  }

  show(): this {
    this.#element.classList.remove(css.hidden);
    return this;
  }
}
