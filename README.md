# Classified Ad System

A modern web application for creating and managing classified advertisements with AI-powered content generation capabilities.

## Overview

The Classified Ad System is a React-based web application that streamlines the process of creating classified advertisements. It features a step-by-step wizard interface that guides users through the process of selecting publications, categories, and creating ad content with the help of AI.

## Features

### 1. Publication Selection
- Browse and select from a list of available publications
- Multi-select capability for placing ads in multiple publications
- Visual feedback for selected publications

### 2. Category Selection
- Hierarchical category browsing
- Search functionality for quick category finding
- Clear visual indication of selected category

### 3. Ad Content Creation
- Integrated HTML editor with live preview
- Dark/Light mode toggle for comfortable editing
- AI-powered content generation using OpenAI's GPT-3.5
- Real-time preview of HTML content

### 4. Settings Management
- Secure API key management for OpenAI integration
- API key validation and testing
- Built-in chat interface for testing API connectivity

## Technical Stack

- **Frontend**: React with Vite
- **Styling**: CSS with CSS Variables for theming
- **AI Integration**: OpenAI GPT-3.5 API
- **State Management**: React Hooks (useState, useEffect)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenAI API key

### Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd classifieds
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory:
   ```
   VITE_OPENAI_API_KEY=your_openai_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Usage

1. **Select Publications**
   - Browse through available publications
   - Select one or more publications for your ad
   - Click "Next" to proceed

2. **Choose Category**
   - Navigate through the category hierarchy
   - Use the search function to find specific categories
   - Select your desired category
   - Click "Next" to proceed

3. **Create Ad Content**
   - Use the HTML editor to create your ad content
   - Toggle between dark and light mode for comfortable editing
   - Use the live preview to see how your ad will appear
   - Access settings to configure OpenAI API key
   - Test the AI integration using the built-in chat interface

## Security

- API keys are stored in environment variables
- `.env` file is included in `.gitignore` to prevent accidental commits
- API key validation ensures proper format before use

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- OpenAI for providing the GPT-3.5 API
- React and Vite teams for the excellent development tools
- All contributors who have helped improve this project
