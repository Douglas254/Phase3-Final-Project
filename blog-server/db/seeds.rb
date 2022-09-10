puts "🌱 Seeding spices..."

# Seed your database here
30.times do
    Post.create(
        title: Faker::Game.unique.title,
        image: Faker::Avatar.unique.image,
        short_story: Faker::Lorem.unique.paragraph(sentence_count: 70)
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
