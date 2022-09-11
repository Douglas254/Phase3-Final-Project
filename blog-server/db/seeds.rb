puts "🌱 Seeding spices..."

# Seed your database here
30.times do
    Post.create(
        title: Faker::Movie.unique.title,
        image: "https://loremflickr.com/#{rand(150..200)}/#{rand(150..200)}/all",
        short_story: Faker::Lorem.unique.paragraph(sentence_count: 20)
    )
end

50.times do
    User.create(
        name: Faker::Name.unique.name
    )
end

500.times do
    Like.create(
        user_id: User.all[rand(User.count)].id,
        post_id: Post.all[rand(Post.count)].id
    )
end
puts "✅ Done seeding!"
