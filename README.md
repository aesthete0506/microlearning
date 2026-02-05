# 📚 Microlearning

A TikTok/Reels-style smooth scrolling app for bite-sized educational content. Swipe through knowledge like you scroll through social media!

![Microlearning App](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Vite](https://img.shields.io/badge/Vite-5-purple)

## ✨ Features

- **🎯 Smooth Scrolling** - TikTok/Reels-style vertical snap scrolling
- **📱 Mobile First** - Optimized for touch devices with swipe gestures
- **🎨 Beautiful UI** - Gradient backgrounds and smooth animations
- **📂 Domain Selection** - Filter content by topics:
  - 🤖 AI & Tech
  - 💰 Personal Finance
  - 🏃 Health & Wellness
  - ⚡ Productivity
  - 🧠 Psychology
  - 🔬 Science
- **⌨️ Keyboard Navigation** - Use Arrow keys or j/k to navigate
- **💡 Rich Content** - Tips, facts, and engaging educational content

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

## 🎮 How to Use

1. **Select a Domain** - Tap on any category chip at the top
2. **Scroll/Swipe** - Swipe up to see the next content card
3. **Keyboard** - Use ↑/↓ arrows or j/k keys on desktop
4. **Interact** - Like, save, or share content cards

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **CSS3** - Animations & scroll snapping

## 📁 Project Structure

```
src/
├── components/
│   ├── ContentCard.tsx    # Individual content card
│   ├── DomainSelector.tsx # Category filter chips
│   └── Feed.tsx           # Scrollable feed container
├── data/
│   └── content.ts         # Sample educational content
├── types/
│   └── index.ts           # TypeScript types
├── App.tsx                # Main app component
└── main.tsx               # Entry point
```

## 📄 License

MIT
