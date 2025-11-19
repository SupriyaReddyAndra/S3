import React, { useState } from "react";

export default function App() {
  // ---------------- STATES ----------------
  const [currentPage, setCurrentPage] = useState("home"); // home | profile

  const [searchText, setSearchText] = useState("");
  const [postText, setPostText] = useState("");
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);
  const [followList, setFollowList] = useState([
    { name: "Sravani", username: "sravani", followed: false },
    { name: "Nikil", username: "nikil", followed: false },
    { name: "Sushmitha", username: "sushmitha", followed: false }
  ]);

  // ---------------- FUNCTIONALITY ----------------

  // Create Post
  const createPost = () => {
    if (postText.trim() === "") return;

    const newPost = {
      id: Date.now(),
      text: postText,
      likes: 0
    };

    setPosts([newPost, ...posts]);
    setPostText("");
  };

  // Like a post
  const likePost = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  // Add Story
  const addStory = () => {
    const newStory = {
      id: Date.now(),
      img: `https://i.pravatar.cc/150?img=${stories.length + 1}`
    };
    setStories([...stories, newStory]);
  };

  // Follow / Unfollow
  const toggleFollow = (index) => {
    setFollowList(
      followList.map((user, i) =>
        i === index ? { ...user, followed: !user.followed } : user
      )
    );
  };

  // Search Filter
  const filteredPosts = posts.filter((post) =>
    post.text.toLowerCase().includes(searchText.toLowerCase())
  );

  // ---------------- PROFILE PAGE ----------------
  if (currentPage === "profile") {
    return (
      <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">

        <button
          onClick={() => setCurrentPage("home")}
          className="mb-6 bg-gray-700 text-white px-4 py-2 rounded-lg"
        >
          ← Back to Home
        </button>

        <div className="bg-white w-[90%] p-6 rounded-xl shadow">
          <div className="text-center">
            <div className="text-6xl mb-2">👤</div>
            <h2 className="text-2xl font-bold">John Doe</h2>
            <p className="text-gray-500">@johndoe</p>
          </div>

          <div className="flex justify-around mt-6">
            <div className="text-center">
              <p className="font-bold">{posts.length}</p>
              <p className="text-gray-500">Posts</p>
            </div>
            <div className="text-center">
              <p className="font-bold">1M</p>
              <p className="text-gray-500">Followers</p>
            </div>
            <div className="text-center">
              <p className="font-bold">500</p>
              <p className="text-gray-500">Following</p>
            </div>
          </div>

          <h3 className="mt-8 mb-3 text-lg font-semibold">Your Stories</h3>
          <div className="flex gap-3 overflow-x-auto">
            {stories.length === 0 && (
              <p className="text-gray-500">No stories yet</p>
            )}
            {stories.map((story) => (
              <img
                key={story.id}
                src={story.img}
                className="w-16 h-16 rounded-full border-2 border-blue-500"
              />
            ))}
          </div>

          <h3 className="mt-8 mb-3 text-lg font-semibold">Your Posts</h3>

          {posts.length === 0 ? (
            <p className="text-gray-500 text-center py-10">No posts yet</p>
          ) : (
            posts.map((post) => (
              <div key={post.id} className="p-4 bg-gray-100 rounded-lg mb-4">
                <p>{post.text}</p>
                <p className="text-sm text-blue-600 mt-1">
                  ❤️ {post.likes} likes
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }

  // ---------------- HOME PAGE ----------------
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500 via-purple-500 via-yellow-500 via-blue-500 to-red-500 w-full flex flex-col items-center py-6">

      {/* ---------- TOP BAR ---------- */}
      <div className="w-[90%] flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Instagram</h1>

        <div className="relative">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search..."
            className="px-4 py-2 pl-10 rounded-lg border bg-white shadow-sm"
          />
          <span className="absolute left-3 top-2.5 text-gray-500">🔍</span>
        </div>
      </div>

      <div className="w-[90%] grid grid-cols-4 gap-6">

        {/* LEFT SIDEBAR */}
        <div className="col-span-1 space-y-6">

          {/* Profile Box */}
          <div className="bg-white p-5 rounded-xl shadow">
            <div className="text-center">
              <div className="text-5xl mb-2">👤</div>
              <h2 className="font-semibold text-lg">John Doe</h2>
              <p className="text-gray-500">@johndoe</p>
            </div>

            <div className="flex justify-around mt-4 text-sm">
              <div className="text-center">
                <p className="font-bold">1M</p>
                <p className="text-gray-500">Followers</p>
              </div>
              <div className="text-center">
                <p className="font-bold">500</p>
                <p className="text-gray-500">Following</p>
              </div>
              <div className="text-center">
                <p className="font-bold">{posts.length}</p>
                <p className="text-gray-500">Posts</p>
              </div>
            </div>

            <button
              onClick={() => setCurrentPage("profile")}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg"
            >
              View Profile
            </button>
          </div>

          {/* Trending Topics */}
          <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="font-semibold mb-3">📈 Trending Topics</h2>
            <ul className="space-y-2 text-sm">
              <li>#Web Development</li>
              <li>#AI & Data Science</li>
              <li>#ReactJS</li>
              <li>#Spring Boot</li>
              <li>#Artificial Intelligence</li>
              <li>#Data Analyst</li>
            </ul>
          </div>

        </div>

        {/* CENTER FEED */}
        <div className="col-span-2 space-y-6">

          {/* Stories */}
          <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4 overflow-x-auto">
            <div className="flex flex-col items-center">
              <button
                onClick={addStory}
                className="w-14 h-14 rounded-full border flex items-center justify-center text-3xl"
              >
                +
              </button>
              <p className="text-sm mt-1">Add Story</p>
            </div>

            {stories.map((story) => (
              <img
                key={story.id}
                src={story.img}
                alt="story"
                className="w-14 h-14 rounded-full border-2 border-blue-500"
              />
            ))}
          </div>

          {/* Create Post */}
          <div className="bg-white p-5 rounded-xl shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-4xl">👤</div>
              <div className="flex-1">
                <input
                  type="text"
                  value={postText}
                  onChange={(e) => setPostText(e.target.value)}
                  placeholder="What's on your mind?"
                  className="bg-gray-100 w-full p-3 rounded-lg"
                />
              </div>
            </div>

            <button
              onClick={createPost}
              className="w-full bg-blue-600 text-white py-2 rounded-lg"
            >
              + Create Post
            </button>
          </div>

          {/* Posts */}
          {filteredPosts.length === 0 ? (
            <div className="bg-white p-20 rounded-xl shadow flex items-center justify-center text-gray-500 text-xl">
              No Posts Yet
            </div>
          ) : (
            filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white p-6 rounded-xl shadow mb-4"
              >
                <p>{post.text}</p>

                <button
                  onClick={() => likePost(post.id)}
                  className="mt-3 bg-blue-500 text-white px-3 py-1 rounded-lg"
                >
                  👍 Like ({post.likes})
                </button>
              </div>
            ))
          )}

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="col-span-1 space-y-6">

          <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="font-semibold mb-3">Who To Follow</h2>

            {followList.map((user, index) => (
              <div key={index} className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">👤</div>
                  <div>
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-gray-500 text-sm">@{user.username}</p>
                  </div>
                </div>

                <button
                  onClick={() => toggleFollow(index)}
                  className={`px-3 py-1 rounded-lg text-white ${
                    user.followed ? "bg-gray-600" : "bg-blue-600"
                  }`}
                >
                  {user.followed ? "Following" : "Follow"}
                </button>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
